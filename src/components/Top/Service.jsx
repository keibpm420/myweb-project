import React from "react";

const Service = () => {
    return (
        <section className="top-service u-ptb" id="service">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english">service</span>
                    <h2 className="c-title">サービス内容</h2>
                </div>

                <ul className="top-service-list">
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-user.svg"
                                width="48"
                                height="48"
                                alt="個別就職相談"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">個別就職相談</h3>
                        <p className="top-service-description">
                            キャリアコンサルタント有資格者による1対1の相談で、就職活動の方向性やキャリア形成をサポート。
                        </p>
                    </li>
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-books.svg"
                                width="48"
                                height="48"
                                alt="教材閲覧"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">キャリア教材閲覧</h3>
                        <p className="top-service-description">
                            書籍・雑誌・新聞など、キャリア形成に役立つ教材を自由に閲覧可能。
                        </p>
                    </li>
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-search.svg"
                                width="48"
                                height="48"
                                alt="求人情報検索"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">
                            求人情報提供・検索
                        </h3>
                        <p className="top-service-description">
                            求人票の確認や検索システムを使って、自分に合った求人情報をチェックできる。
                        </p>
                    </li>
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-calendar.svg"
                                width="48"
                                height="48"
                                alt="説明会・インターン情報"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">
                            説明会・インターン情報
                        </h3>
                        <p className="top-service-description">
                            企業・病院の説明会やインターンシップ情報を随時提供。
                        </p>
                    </li>
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-people.svg"
                                width="48"
                                height="48"
                                alt="先輩体験談"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">先輩体験談</h3>
                        <p className="top-service-description">
                            OB・OGの就活体験談を閲覧し、実際の成功例やアドバイスを参考にできる。
                        </p>
                    </li>
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-envelope.svg"
                                width="48"
                                height="48"
                                alt="推薦状発行"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">推薦状発行</h3>
                        <p className="top-service-description">
                            学校推薦状の発行手続きや相談をサポート。
                        </p>
                    </li>
                    <li className="top-service-item">
                        <div className="top-service-img">
                            <img
                                src="/img/icon-document.svg"
                                width="48"
                                height="48"
                                alt="書類受取"
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-service-title">関係書類受取</h3>
                        <p className="top-service-description">
                            進路希望調査票など、就職活動に必要な書類を受け取れる。
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Service;
