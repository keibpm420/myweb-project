import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { Menu, X, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Login from "../components/Login";
import { Reservation } from "../schema/reservations.schema";
import toast, { Toaster } from "react-hot-toast";
import { User } from "@supabase/supabase-js";

// --- API ---
const fetchReservations = async (): Promise<Reservation[]> => {
    const { data, error } = await supabase
        .from("reservations")
        .select("id, name, email, date, message, status")
        .order("date", { ascending: false });
    if (error) throw error;
    return (data as Reservation[]) ?? [];
};

const deleteReservation = async (id: string) => {
    const { error } = await supabase.from("reservations").delete().eq("id", id);
    if (error) throw error;
};

const updateStatus = async ({ id, status }: { id: string; status: string }) => {
    const { error } = await supabase
        .from("reservations")
        .update({ status })
        .eq("id", id);
    if (error) throw error;
};

const updateReservation = async (reservation: Reservation) => {
    const { error } = await supabase
        .from("reservations")
        .update({
            name: reservation.name,
            email: reservation.email,
            date: reservation.date,
            message: reservation.message,
        })
        .eq("id", reservation.id);
    if (error) throw error;
};

// --- Utils ---
const formatDate = (date: string) =>
    new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date));

// --- Hooks ---
const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
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

// --- Main Component ---
const Admin = () => {
    const baseDate = useMemo(() => new Date(), []);
    const { user, loading: authLoading, logout } = useAuth();
    const queryClient = useQueryClient();

    // UI States
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [editTarget, setEditTarget] = useState<Reservation | null>(null);

    // Search & Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("すべて");
    const [dateFilter, setDateFilter] = useState<"all" | "today" | "tomorrow">(
        "all"
    );

    // Fetch Data
    const {
        data: reservations = [],
        isLoading,
        error,
    } = useQuery<Reservation[]>({
        queryKey: ["reservations"],
        queryFn: fetchReservations,
        enabled: !!user,
    });

    // Mutations
    const deleteMutation = useMutation({
        mutationFn: deleteReservation,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reservations"] });
            setDeleteId(null);
            toast.success("予約を削除しました");
        },
        onError: (err: Error) => toast.error(`失敗: ${err.message}`),
    });

    const updateStatusMutation = useMutation({
        mutationFn: updateStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reservations"] });
            toast.success("ステータスを更新しました");
        },
        onError: (err: Error) => toast.error(`失敗: ${err.message}`),
    });

    const editMutation = useMutation({
        mutationFn: updateReservation,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reservations"] });
            setEditTarget(null);
            toast.success("内容を保存しました");
        },
        onError: (err: Error) => toast.error(`失敗: ${err.message}`),
    });

    // Filtered List & Stats
    const filteredReservations = useMemo(() => {
        // 2. 固定した baseDate を使って今日・明日を計算
        const todayStr = baseDate.toLocaleDateString("ja-JP");

        const tomorrowDate = new Date(baseDate);
        tomorrowDate.setDate(baseDate.getDate() + 1);
        const tomorrowStr = tomorrowDate.toLocaleDateString("ja-JP");

        return reservations.filter((r) => {
            const matchesSearch =
                r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.email.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus =
                filterStatus === "すべて" || r.status === filterStatus;

            const reservationDateStr = new Date(r.date).toLocaleDateString(
                "ja-JP"
            );

            let matchesDate = true;
            if (dateFilter === "today")
                matchesDate = reservationDateStr === todayStr;
            if (dateFilter === "tomorrow")
                matchesDate = reservationDateStr === tomorrowStr;

            return matchesSearch && matchesStatus && matchesDate;
        });
    }, [reservations, searchQuery, filterStatus, dateFilter, baseDate]); // baseDateを依存関係に含める

    const stats = useMemo(
        () => ({
            total: reservations.length,
            unprocessed: reservations.filter((r) => r.status !== "完了").length,
            matched: filteredReservations.length,
        }),
        [reservations, filteredReservations]
    );

    if (authLoading) return <div className="admin-loading">確認中...</div>;
    if (!user) return <Login />;
    if (isLoading) return <div className="admin-loading">読み込み中...</div>;
    if (error) return <p className="admin-error">取得に失敗しました</p>;

    return (
        <div className="admin">
            <Toaster position="top-right" />

            {/* Sidebar Overlay Mask */}
            {isSidebarOpen && (
                <div
                    className="admin-mask"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar 本体 */}
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
                    <h3
                        style={{
                            fontSize: "12px",
                            color: "var(--admin-color-font-sub)",
                            marginBottom: "-8px",
                            paddingLeft: "12px",
                        }}
                    >
                        クイックフィルタ
                    </h3>
                    <button
                        className={`admin-sidebar-link ${
                            dateFilter === "all" ? "active" : ""
                        }`}
                        onClick={() => {
                            setDateFilter("all");
                            setIsSidebarOpen(false);
                        }}
                    >
                        すべての予約
                    </button>
                    <button
                        className={`admin-sidebar-link ${
                            dateFilter === "today" ? "active" : ""
                        }`}
                        onClick={() => {
                            setDateFilter("today");
                            setIsSidebarOpen(false);
                        }}
                    >
                        今日の予約
                    </button>
                    <button
                        className={`admin-sidebar-link ${
                            dateFilter === "tomorrow" ? "active" : ""
                        }`}
                        onClick={() => {
                            setDateFilter("tomorrow");
                            setIsSidebarOpen(false);
                        }}
                    >
                        明日の予約
                    </button>
                </nav>
            </aside>

            <header className="admin-header">
                <button
                    className="admin-icon"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Menu size={18} color="#9298A1" />
                </button>
                <h1 className="admin-heading">予約管理</h1>
                <p
                    style={{
                        marginLeft: "auto",
                        fontSize: "12px",
                        color: "#9198a1",
                    }}
                >
                    {user.email}
                </p>
                <button onClick={logout} className="admin-logout-button">
                    ログアウト
                </button>
            </header>

            <div className="admin-wrapper">
                <main className="admin-container-wrapper">
                    {/* Search Controls */}
                    <div
                        className="admin-controls"
                        style={{
                            display: "flex",
                            gap: "12px",
                            marginBottom: "16px",
                        }}
                    >
                        <input
                            className="admin-input"
                            style={{ flex: 1 }}
                            placeholder="名前やメールで検索"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select
                            className="admin-input"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            style={{ textAlign: "center" }}
                        >
                            <option value="すべて">すべて</option>
                            <option value="未対応">未対応</option>
                            <option value="完了">完了</option>
                        </select>
                    </div>

                    {/* Table Container */}
                    <div className="admin-container">
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
                                {filteredReservations.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="admin-table-row"
                                    >
                                        <td className="admin-table-td">
                                            {index + 1}
                                        </td>
                                        <td className="admin-table-td">
                                            {item.name}
                                        </td>
                                        <td className="admin-table-td">
                                            <span
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    updateStatusMutation.mutate(
                                                        {
                                                            id: item.id,
                                                            status:
                                                                item.status ===
                                                                "完了"
                                                                    ? "未対応"
                                                                    : "完了",
                                                        }
                                                    )
                                                }
                                                className={`admin-badge ${
                                                    item.status === "完了"
                                                        ? "admin-badge--done"
                                                        : "admin-badge--new"
                                                }`}
                                            >
                                                {updateStatusMutation.isPending
                                                    ? "..."
                                                    : item.status || "未対応"}
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
                                                <button
                                                    className="admin-icon admin-icon--edit"
                                                    onClick={() =>
                                                        setEditTarget(item)
                                                    }
                                                >
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
                    </div>
                </main>

                <aside className="admin-cards">
                    <StatCard title="全予約数" value={stats.total} />
                    <StatCard title="未対応" value={stats.unprocessed} />
                    <StatCard title="検索一致" value={stats.matched} />
                </aside>
            </div>

            {/* Modals */}
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
                                onClick={() => deleteMutation.mutate(deleteId)}
                            >
                                削除
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {editTarget && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal admin-modal--edit">
                        <h3 className="admin-modal-title">予約の編集</h3>
                        <div className="admin-edit-form">
                            <input
                                type="text"
                                value={editTarget.name}
                                onChange={(e) =>
                                    setEditTarget({
                                        ...editTarget,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="名前"
                            />
                            <input
                                type="email"
                                value={editTarget.email}
                                onChange={(e) =>
                                    setEditTarget({
                                        ...editTarget,
                                        email: e.target.value,
                                    })
                                }
                                placeholder="Email"
                            />
                            <input
                                type="datetime-local"
                                value={editTarget.date.slice(0, 16)}
                                onChange={(e) =>
                                    setEditTarget({
                                        ...editTarget,
                                        date: e.target.value,
                                    })
                                }
                            />
                            <textarea
                                value={editTarget.message || ""}
                                onChange={(e) =>
                                    setEditTarget({
                                        ...editTarget,
                                        message: e.target.value,
                                    })
                                }
                                placeholder="備考"
                            />
                        </div>
                        <div className="admin-modal-actions">
                            <button
                                className="admin-btn"
                                onClick={() => setEditTarget(null)}
                            >
                                キャンセル
                            </button>
                            <button
                                className="admin-btn admin-btn--primary"
                                onClick={() => editMutation.mutate(editTarget)}
                            >
                                保存する
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
