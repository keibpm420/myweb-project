import { Link } from "react-router-dom";

const Footer = () => {
    const footerLinkData = [
        { href: "#problem", text: "就活の悩み" },
        { href: "#feature", text: "特徴" },
        { href: "#service", text: "サービス内容" },
        { href: "#flow", text: "ご利用の流れ" },
        { href: "#interview", text: "インタビュー" },
        { href: "#faq", text: "よくある質問" },
    ];

    return (
        <footer className="l-footer">
            <div className="l-footer-head">
                <Link className="l-footer-button" to="/reservations">
                    <span className="l-footer-button-label">Reserve</span>
                    <h2 className="l-footer-button-title">相談の予約をする</h2>
                    <p className="l-footer-button-text">
                        就活や進路、キャリアの悩みを専門スタッフに相談できます。初めての方も安心して利用できます。
                    </p>
                    <div className="l-footer-button-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            />
                        </svg>
                    </div>
                </Link>

                <a className="l-footer-button" href="/" target="_blank">
                    <span className="l-footer-button-label">Jobs</span>
                    <h2 className="l-footer-button-title">求人情報を見る</h2>
                    <p className="l-footer-button-text">
                        学生向け・未経験OKの求人を中心にIT業界の仕事を掲載しています。気になる企業をチェックしてみましょう。
                    </p>
                    <div className="l-footer-button-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            />
                        </svg>
                    </div>
                </a>
            </div>

            <div className="l-footer-body">
                <Link className="l-footer-logo" to="/">
                    <h2>Career Center</h2>
                </Link>

                <ul className="l-footer-nav">
                    {footerLinkData.map((data, i) => {
                        return (
                            <li key={i} className="l-footer-nav-item">
                                <a href={data.href}>{data.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <small className="l-footer-copy">
                © 2025 TOKYO ELECTRONICS COLLEGE.
            </small>
        </footer>
    );
};

export default Footer;
