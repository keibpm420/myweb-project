const reservations = [
    {
        id: 1,
        name: "山田 太郎",
        email: "yamada@univ.ac.jp",
        note: "ガクチカの添削をお願いしたいです。",
        status: "未対応",
    },
    {
        id: 2,
        name: "佐藤 花子",
        email: "sato@univ.ac.jp",
        note: "自己分析のやり方について相談したい。",
        status: "確定",
    },
];

export default function Test() {
    return (
        <div className="p-4 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {["ID", "名前", "Email", "補足", "操作"].map((h) => (
                            <th
                                key={h}
                                className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {reservations.map((res) => (
                        <tr key={res.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {res.id}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {res.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-red-600 underline">
                                {res.email}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                {res.note}
                            </td>
                            <td className="px-6 py-4 text-sm space-x-2">
                                <button className="text-indigo-600 hover:text-indigo-900">
                                    詳細
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                    削除
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
