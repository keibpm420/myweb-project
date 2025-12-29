import { Link } from "react-router-dom";

const Mv = () => {
    return (
        <div className="top-mv" id="mv">
            <div className="top-mv-head">
                <div className="top-mv-wrap">
                    <p className="top-mv-text">
                        <span>履歴書・面接・エントリーシート</span>
                        <span></span>
                        <span>就活で悩んでいませんか？</span>
                    </p>
                    <p className="top-mv-text02">
                        <span>就活の悩み、</span>
                        <span>相談に乗ります。</span>
                    </p>
                    <ul className="top-mv-list">
                        <li className="top-mv-item">履歴書対策</li>
                        <li className="top-mv-item">面接対策</li>
                        <li className="top-mv-item">卒業生の声</li>
                        <li className="top-mv-item">就職サポート</li>
                        <li className="top-mv-item">キャリア支援</li>
                        <li className="top-mv-item">個別面談</li>
                    </ul>
                </div>
                <div className="top-mv-button-wrap">
                    <Link
                        className="top-mv-button top-mv-button--reserve"
                        to="/reservations"
                    >
                        相談の予約をする
                    </Link>

                    <a
                        className="top-mv-button top-mv-button--jobs"
                        href="https://www.tec-scs.jp/"
                        target="_blank"
                    >
                        求人情報を見る
                    </a>
                </div>
            </div>

            <div className="top-mv-image">
                <img
                    src="/img/img-support04.jpg"
                    width="530"
                    height="471"
                    alt=""
                    decoding="async"
                />
            </div>
        </div>
    );
};

export default Mv;
