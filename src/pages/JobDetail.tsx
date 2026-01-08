import { useParams, useNavigate } from "react-router-dom";

const DUMMY_JOBS = [
    {
        id: 1,
        company: "合同会社LIBERA",
        title: "【未経験OK】Web制作会社のコーダー募集",
        content: "詳細な仕事内容がここに入ります...",
        type: "正社員",
        category: "コーダー",
        location: "福岡",
        salary: "230万円 〜 350万円",
    },
    {
        id: 2,
        company: "Tech Studio",
        title: "フロントエンドエンジニア職",
        content: "Reactを用いた開発をお任せします...",
        type: "正社員",
        category: "エンジニア",
        location: "東京",
        salary: "400万円 〜 700万円",
    },
];

const JobDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = DUMMY_JOBS.find((j) => j.id === Number(id));

    if (!job) return <p>求人が見つかりません</p>;

    return (
        <div className="p-job-detail l-container">
            <button onClick={() => navigate(-1)} className="c-button--back">
                ← 一覧に戻る
            </button>
            <div className="p-job-detail__card">
                <span className="c-job-card__logo-text">{job.company}</span>
                <h1 className="p-job-detail__title">{job.title}</h1>
                <p className="p-job-detail__content">{job.content}</p>

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
                <button className="c-button c-button--apply">
                    この求人に応募する
                </button>
            </div>
        </div>
    );
};

export default JobDetail;
