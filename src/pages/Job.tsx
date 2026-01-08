import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DUMMY_JOBS = [
    {
        id: 1,
        company: "合同会社ASK",
        title: "【未経験OK】Web制作会社のコーダー募集",
        type: "正社員",
        category: "コーダー",
        location: "東京",
        salary: "230万円 〜 350万円",
        tags: ["#未経験歓迎", "#リモート可"],
    },
    {
        id: 2,
        company: "Tech Studio",
        title: "フロントエンドエンジニア（React/TS）",
        type: "正社員",
        category: "エンジニア",
        location: "東京",
        salary: "450万円 〜 800万円",
        tags: ["#高年収", "#React"],
    },
    {
        id: 3,
        company: "Creative Lab",
        title: "Webデザイナー職：UI設計から制作まで",
        type: "契約社員",
        category: "デザイナー",
        location: "大阪",
        salary: "300万円 〜 500万円",
        tags: ["#服装自由", "#副業OK"],
    },
    {
        id: 4,
        company: "Future AI",
        title: "Pythonエンジニア / AIデータ分析",
        type: "正社員",
        category: "エンジニア",
        location: "東京",
        salary: "600万円 〜 1,000万円",
        tags: ["#フルリモート", "#最新技術"],
    },
    {
        id: 5,
        company: "地域振興会",
        title: "地方移住サポートWebディレクター",
        type: "正社員",
        category: "ディレクター",
        location: "北海道",
        salary: "250万円 〜 400万円",
        tags: ["#移住支援", "#未経験歓迎"],
    },
    {
        id: 6,
        company: "Web Marketing Inc.",
        title: "SEOコンサルタント・アナリスト",
        type: "正社員",
        category: "ディレクター",
        location: "東京",
        salary: "400万円 〜 600万円",
        tags: ["#土日祝休み", "#駅チカ"],
    },
    {
        id: 7,
        company: "Design Hub",
        title: "グラフィックデザイナー（DTP/Web）",
        type: "正社員",
        category: "デザイナー",
        location: "愛知",
        salary: "350万円 〜 550万円",
        tags: ["#経験者優遇", "#フレックス制"],
    },
    {
        id: 8,
        company: "Cyber Base",
        title: "インフラエンジニア（AWS/Azure）",
        type: "正社員",
        category: "エンジニア",
        location: "大阪",
        salary: "500万円 〜 900万円",
        tags: ["#資格手当あり", "#高年収"],
    },
    {
        id: 9,
        company: "Shopify Partners",
        title: "ECサイト構築エンジニア",
        type: "業務委託",
        category: "エンジニア",
        location: "福岡",
        salary: "400万円 〜 700万円",
        tags: ["#副業OK", "#Shopify"],
    },
    {
        id: 10,
        company: "Social Agency",
        title: "SNSマーケター（インスタ・TikTok運用）",
        type: "正社員",
        category: "ディレクター",
        location: "東京",
        salary: "300万円 〜 500万円",
        tags: ["#若手活躍", "#トレンド重視"],
    },
    {
        id: 11,
        company: "Startup Factory",
        title: "CTO候補：バックエンドエンジニア",
        type: "正社員",
        category: "エンジニア",
        location: "東京",
        salary: "800万円 〜 1,200万円",
        tags: ["#ストックオプション", "#裁量労働制"],
    },
    {
        id: 12,
        company: "Craft Studio",
        title: "HTML/CSSコーダー（WordPress特化）",
        type: "アルバイト",
        category: "コーダー",
        location: "京都",
        salary: "時給 1,500円 〜 2,000円",
        tags: ["#週3日からOK", "#Wワーク歓迎"],
    },
    {
        id: 13,
        company: "Game World",
        title: "3DCGデザイナー（Maya/Unity）",
        type: "正社員",
        category: "デザイナー",
        location: "東京",
        salary: "400万円 〜 750万円",
        tags: ["#ゲーム好き歓迎", "#最新機材"],
    },
    {
        id: 14,
        company: "Media Japan",
        title: "WEBメディア編集・ライター",
        type: "契約社員",
        category: "ディレクター",
        location: "大阪",
        salary: "280万円 〜 450万円",
        tags: ["#取材あり", "#文章力重視"],
    },
    {
        id: 15,
        company: "Global Tech",
        title: "ブリッジエンジニア（英語/日本語）",
        type: "正社員",
        category: "エンジニア",
        location: "東京",
        salary: "500万円 〜 850万円",
        tags: ["#語学を活かす", "#海外出張あり"],
    },
    {
        id: 16,
        company: "Education Plus",
        title: "教育系Webサービスのデザイン担当",
        type: "正社員",
        category: "デザイナー",
        location: "福岡",
        salary: "350万円 〜 500万円",
        tags: ["#社会貢献", "#育休実績あり"],
    },
    {
        id: 17,
        company: "Local Support",
        title: "地域限定職：サポートエンジニア",
        type: "正社員",
        category: "エンジニア",
        location: "宮城",
        salary: "300万円 〜 450万円",
        tags: ["#転勤なし", "#U・Iターン歓迎"],
    },
    {
        id: 18,
        company: "Ad Tech Solutions",
        title: "広告配信システムの保守運用",
        type: "正社員",
        category: "エンジニア",
        location: "東京",
        salary: "450万円 〜 650万円",
        tags: ["#安定企業", "#夜勤なし"],
    },
    {
        id: 19,
        company: "Fashion Brand",
        title: "アパレルECサイトのWeb制作・運用",
        type: "正社員",
        category: "コーダー",
        location: "東京",
        salary: "350万円 〜 500万円",
        tags: ["#ファッション好き", "#社割あり"],
    },
    {
        id: 20,
        company: "Mobile Innovations",
        title: "iOS/Androidアプリ開発エンジニア",
        type: "正社員",
        category: "エンジニア",
        location: "愛知",
        salary: "500万円 〜 800万円",
        tags: ["#自社開発", "#スキルアップ支援"],
    },
];

const Job = () => {
    const navigate = useNavigate();

    // 検索用ステート
    const [keyword, setKeyword] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const [favorites, setFavorites] = useState<number[]>([]);

    // リセット機能
    const handleReset = () => {
        setKeyword("");
        setSelectedLocation("");
        setSelectedType("");
        setSelectedCategory("");
    };

    // フィルタリングのロジック
    const filteredJobs = DUMMY_JOBS.filter((job) => {
        const matchesKeyword =
            job.title.includes(keyword) || job.company.includes(keyword);
        const matchesLocation =
            selectedLocation === "" || job.location === selectedLocation;
        const matchesType = selectedType === "" || job.type === selectedType;
        const matchesCategory =
            selectedCategory === "" || job.category === selectedCategory;

        return (
            matchesKeyword && matchesLocation && matchesType && matchesCategory
        );
    });

    // 選択肢を動的に生成（データが増えても自動更新）
    const locations = Array.from(new Set(DUMMY_JOBS.map((j) => j.location)));
    const types = Array.from(new Set(DUMMY_JOBS.map((j) => j.type)));
    const categories = Array.from(new Set(DUMMY_JOBS.map((j) => j.category)));

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id)
                ? prev.filter((favId) => favId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="p-job l-container">
            <div className="p-job__inner">
                <aside className="p-job__sidebar">
                    <div className="c-search-box">
                        <h2 className="c-search-box__title">絞り込み検索</h2>
                        <button
                            className="c-search-box__reset"
                            onClick={handleReset}
                        >
                            クリア
                        </button>

                        {/* キーワード */}
                        <div className="c-search-box__item">
                            <label>キーワード</label>
                            <input
                                type="text"
                                placeholder="例：コーダー"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>

                        {/* 地域 */}
                        <div className="c-search-box__item">
                            <label>地域</label>
                            <select
                                value={selectedLocation}
                                onChange={(e) =>
                                    setSelectedLocation(e.target.value)
                                }
                            >
                                <option value="">選択してください</option>
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>
                                        {loc}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 雇用形態 */}
                        <div className="c-search-box__item">
                            <label>雇用形態</label>
                            <select
                                value={selectedType}
                                onChange={(e) =>
                                    setSelectedType(e.target.value)
                                }
                            >
                                <option value="">選択してください</option>
                                {types.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 職種 */}
                        <div className="c-search-box__item">
                            <label>職種</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                            >
                                <option value="">選択してください</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="c-button c-button--search"
                            onClick={() => alert("検索条件を適用しました")}
                        >
                            検索する
                        </button>
                    </div>
                </aside>

                <main className="p-job__main">
                    <p className="p-job__count">
                        該当件数：{filteredJobs.length}件
                    </p>
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="c-job-card">
                            <div className="c-job-card__header">
                                <span className="c-job-card__logo-text">
                                    IT
                                </span>
                                <p>{job.company}</p>
                                <button
                                    className={`c-job-card__fav ${
                                        favorites.includes(job.id)
                                            ? "is-active"
                                            : ""
                                    }`}
                                    onClick={() => toggleFavorite(job.id)}
                                >
                                    {favorites.includes(job.id) ? "★" : "☆"}
                                </button>
                            </div>
                            <h2 className="c-job-card__title">{job.title}</h2>
                            <div className="c-job-card__tags">
                                {job.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <table className="c-job-card__table">
                                <tbody>
                                    <tr>
                                        <th>雇用形態</th>
                                        <td>{job.type}</td>
                                    </tr>
                                    <tr>
                                        <th>地域</th>
                                        <td>{job.location}</td>
                                    </tr>
                                    <tr>
                                        <th>年収</th>
                                        <td>{job.salary}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="c-job-card__buttons">
                                <button className="c-button c-button--apply">
                                    応募する
                                </button>
                                <button
                                    className="c-button c-button--detail"
                                    onClick={() => navigate(`/job/${job.id}`)}
                                >
                                    詳しく見る
                                </button>
                            </div>
                        </div>
                    ))}
                    {filteredJobs.length === 0 && (
                        <p>条件に一致する求人が見つかりませんでした。</p>
                    )}
                </main>
            </div>
        </div>
    );
};
export default Job;
