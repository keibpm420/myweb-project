import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { Reservation } from "../schema/reservations.schema";
import { useState } from "react";
import { Menu, X, Pencil, Trash2 } from "lucide-react";

const fetchReservations = async (): Promise<Reservation[]> => {
    const { data, error } = await supabase
        .from("reservations")
        .select("id, name, email, date, message, created_at")
        .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data ?? [];
};

const Admin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {
        data = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["reservations"],
        queryFn: fetchReservations,
    });

    if (isLoading) return <p className="admin-text--loading">読み込み中...</p>;
    if (error) return <p className="admin-text--error">取得に失敗しました</p>;

    const now = new Date();

    const formatDate = (date: string) => {
        const d = new Date(date);

        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        const hh = String(d.getHours()).padStart(2, "0");
        const mi = String(d.getMinutes()).padStart(2, "0");

        return `${yyyy}/${mm}/${dd} ${hh}:${mi}`;
    };

    return (
        <div className="admin">
            <header className="admin-header">
                <button
                    className="admin-icon"
                    onClick={() => setIsSidebarOpen((v) => !v)}
                    aria-label="サイドバー切り替え"
                >
                    <Menu size={18} color="#9298A1" />
                </button>

                <h1 className="admin-heading">予約一覧</h1>
            </header>

            {isSidebarOpen && (
                <div
                    className="admin-mask"
                    onClick={() => setIsSidebarOpen((v) => !v)}
                    aria-label="サイドバーを開く"
                ></div>
            )}

            <aside
                className={`admin-sidebar ${
                    isSidebarOpen ? "" : "admin-sidebar--closed"
                }`}
            >
                <div className="admin-sidebar-button">
                    <button
                        onClick={() => setIsSidebarOpen((v) => !v)}
                        className="admin-icon"
                        aria-label="サイドバーを閉じる"
                    >
                        <X size={18} color="#9298A1" />
                    </button>
                </div>

                <nav className="admin-sidebar-nav">
                    <p className="admin-sidebar-link">予約一覧</p>
                    <p className="admin-sidebar-link">設定</p>
                    <p className="admin-sidebar-link">その他</p>
                </nav>
            </aside>

            <div className="admin-wrapper">
                <main className="admin-container">
                    <table className="admin-table">
                        <thead>
                            <tr className="admin-table-head-row">
                                <th className="admin-table-th"></th>
                                <th className="admin-table-th">名前</th>
                                <th className="admin-table-th u-font-english">
                                    Email
                                </th>
                                <th className="admin-table-th">日付</th>
                                <th className="admin-table-th">補足</th>
                                <th className="admin-table-th">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={item.id} className="admin-table-row">
                                    <td className="admin-table-td">{i + 1}</td>
                                    <td className="admin-table-td">
                                        {item.name}
                                    </td>
                                    <td className="admin-table-td u-font-english">
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
                                                className="admin-icon"
                                                aria-label="編集"
                                            >
                                                <Pencil
                                                    size={20}
                                                    color="#3B82F6"
                                                />
                                            </button>
                                            <button
                                                className="admin-icon admin-icon--delete"
                                                aria-label="削除"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
                <div className="admin-cards">
                    <div className="admin-card">
                        <h3 className="admin-card-title">総予約数</h3>
                        <p className="admin-card-value">{data.length}</p>
                    </div>
                    <div className="admin-card">
                        <h3 className="admin-card-title">最新予約</h3>
                        <p className="admin-card-value">
                            {data[0]?.name ?? "なし"}
                        </p>
                    </div>
                    <div className="admin-card">
                        <h3 className="admin-card-title">過去の予約</h3>
                        <p className="admin-card-value">
                            {
                                data.filter((item) => new Date(item.date) < now)
                                    .length
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
