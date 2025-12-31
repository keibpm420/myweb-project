import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { Menu, X, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Login from "../components/Login";
import { Reservation } from "../schema/reservations.schema";

const fetchReservations = async (): Promise<Reservation[]> => {
    const { data, error } = await supabase
        .from("reservations")
        .select("id, name, email, date, message, status")
        .order("date", { ascending: false });
    if (error) throw error;
    return data ?? [];
};

const deleteReservation = async (id: string) => {
    const { error } = await supabase.from("reservations").delete().eq("id", id);
    if (error) throw error;
};

const formatDate = (date: string) =>
    new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date));

const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });
        return () => subscription.unsubscribe();
    }, []);

    return { user, loading, logout: () => supabase.auth.signOut() };
};

const Admin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const { user, loading: authLoading, logout } = useAuth();
    const queryClient = useQueryClient();

    const {
        data: reservations = [],
        isLoading,
        error,
    } = useQuery<Reservation[]>({
        queryKey: ["reservations"],
        queryFn: fetchReservations,
        enabled: !!user,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteReservation,
        onSuccess: () => {
            // "reservations" キーのキャッシュを無効化して再取得
            queryClient.invalidateQueries({ queryKey: ["reservations"] });
            setDeleteId(null);
            alert("削除しました");
        },
        onError: (err: any) => {
            alert(`削除に失敗しました: ${err.message}`);
        },
    });

    // モーダル内の削除実行ボタン
    const handleDelete = () => {
        if (deleteId) {
            deleteMutation.mutate(deleteId);
        }
    };

    const stats = useMemo(() => {
        const now = new Date();
        return {
            total: reservations.length,
            latest: reservations[0]?.name ?? "なし",
            past: reservations.filter((r) => new Date(r.date) < now).length,
        };
    }, [reservations]);

    if (authLoading) return <div className="admin-loading">確認中...</div>;
    if (!user) return <Login />;
    if (isLoading) return <div className="admin-loading">読み込み中...</div>;
    if (error) return <p className="admin-error">取得に失敗しました</p>;

    return (
        <div className="admin">
            {/* Header */}
            <header className="admin-header">
                <button
                    className="admin-icon"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu size={18} color="#9298A1" />
                </button>
                <h1 className="admin-heading">予約一覧</h1>
                <p>ログイン中：{user.email}</p>
                <button onClick={logout} className="admin-logout-button">
                    ログアウト
                </button>
            </header>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="admin-mask"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`admin-sidebar ${
                    isSidebarOpen ? "" : "admin-sidebar--closed"
                }`}
            >
                <div className="admin-sidebar-button">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="admin-icon"
                    >
                        <X size={18} />
                    </button>
                </div>
                <nav className="admin-sidebar-nav">
                    {["予約一覧", "設定", "その他"].map((text) => (
                        <p key={text} className="admin-sidebar-link">
                            {text}
                        </p>
                    ))}
                </nav>
            </aside>

            <div className="admin-wrapper">
                <main className="admin-container">
                    <table className="admin-table">
                        <thead>
                            <tr className="admin-table-head-row">
                                {[
                                    "",
                                    "名前",
                                    "状態",
                                    "Email",
                                    "日付",
                                    "補足",
                                    "操作",
                                ].map((h) => (
                                    <th key={h} className="admin-table-th">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((item, index) => (
                                <tr key={item.id} className="admin-table-row">
                                    <td className="admin-table-td">
                                        {index + 1}
                                    </td>
                                    <td className="admin-table-td">
                                        {item.name}
                                    </td>
                                    <td className="admin-table-td">
                                        <span
                                            className={`admin-badge ${
                                                item.status === "完了"
                                                    ? "admin-badge--done"
                                                    : "admin-badge--new"
                                            }`}
                                        >
                                            {item.status || "未対応"}
                                        </span>
                                    </td>
                                    <td className="admin-table-td">
                                        {item.email}
                                    </td>
                                    <td className="admin-table-td">
                                        {formatDate(item.date)}
                                    </td>
                                    <td className="admin-table-td">
                                        {item.message || "-"}
                                    </td>
                                    <td className="admin-table-td">
                                        <div className="admin-table-actions">
                                            <button className="admin-icon admin-icon--edit">
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                className="admin-icon admin-icon--delete"
                                                onClick={() =>
                                                    setDeleteId(item.id)
                                                }
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>

                {/* Stats Cards */}
                <div className="admin-cards">
                    <StatCard title="総予約数" value={stats.total} />
                    <StatCard title="最新予約" value={stats.latest} />
                    <StatCard title="過去の予約" value={stats.past} />
                </div>
            </div>

            {/* Delete Modal */}
            {deleteId && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal">
                        <h3 className="admin-modal-title">削除の確認</h3>
                        <p>この操作は取り消せません。</p>
                        <div className="admin-modal-actions">
                            <button
                                className="admin-btn"
                                onClick={() => setDeleteId(null)}
                            >
                                キャンセル
                            </button>
                            <button
                                className="admin-btn admin-btn--danger"
                                onClick={handleDelete}
                                disabled={deleteMutation.isPending}
                            >
                                {deleteMutation.isPending
                                    ? "削除中..."
                                    : "削除する"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const StatCard = ({
    title,
    value,
}: {
    title: string;
    value: string | number;
}) => (
    <div className="admin-card">
        <h3 className="admin-card-title">{title}</h3>
        <p className="admin-card-value">{value}</p>
    </div>
);

export default Admin;
