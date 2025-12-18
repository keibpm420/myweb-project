import React from "react";

const Problem = () => {
    return (
        <section className="top-problem u-ptb">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english c-title-english--white">
                        problem
                    </span>
                    <h2 className="c-title c-title--white">就活の悩み</h2>
                </div>

                <h3 className="top-problem-title">
                    <div className="top-problem-title-wrap">
                        <span className="top-problem-text">就職活動</span>
                        <span className="top-problem-text02">で</span>
                    </div>
                    <span className="top-problem-text03">
                        こんなお悩みはありませんか？
                    </span>
                </h3>

                <div className="top-problem-read">
                    <span>
                        就職活動は、何が正解か分からず不安になりがちです。
                    </span>
                    <span>
                        履歴書や面接、自己分析など、多くの学生が同じような悩みを抱えています。
                    </span>
                </div>

                <ul className="top-problem-list">
                    <li className="top-problem-item">
                        <div className="top-problem-item-img">
                            <img
                                src="/img/img-resume.svg"
                                width=""
                                height=""
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-problem-item-title">
                            履歴書の書き方に自信がない
                        </h3>
                        <p className="top-problem-item-text">
                            自己PRや志望動機がうまく書けず、書類選考で落ちることが多い。
                        </p>
                    </li>
                    <li className="top-problem-item">
                        <div className="top-problem-item-img">
                            <img
                                src="/img/img-interview.svg"
                                width=""
                                height=""
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-problem-item-title">
                            面接で自分をうまく表現できない
                        </h3>
                        <p className="top-problem-item-text">
                            準備しても緊張してしまい、面接官に自分らしさを伝えられない。
                        </p>
                    </li>
                    <li className="top-problem-item">
                        <div className="top-problem-item-img">
                            <img
                                src="/img/img-question02.svg"
                                width=""
                                height=""
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-problem-item-title">
                            自己分析のやり方が分からない
                        </h3>
                        <p className="top-problem-item-text">
                            自分の強みややりたいことが曖昧で、就活の軸が定まらない。
                        </p>
                    </li>
                    <li className="top-problem-item">
                        <div className="top-problem-item-img">
                            <img
                                src="/img/img-search.svg"
                                width=""
                                height=""
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h3 className="top-problem-item-title">
                            情報収集に時間がかかりすぎる
                        </h3>
                        <p className="top-problem-item-text">
                            企業情報や口コミを調べるのに手間取り、効率的な進め方が分からない。
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Problem;
