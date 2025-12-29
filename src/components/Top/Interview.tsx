import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Interview = () => {
    return (
        <section className="top-interview u-ptb" id="interview">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english c-title-english--white">
                        interview
                    </span>
                    <h2 className="c-title c-title--white">
                        卒業生のインタビュー
                    </h2>
                </div>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        perMove: 1,
                        gap: 16,
                        pagination: true,
                        autoplay: true,
                        interval: 1500,
                        pauseOnHover: true,
                        pauseOnFocus: true,

                        breakpoints: {
                            900: {
                                perPage: 2,
                            },
                            660: {
                                perPage: 1,
                            },
                        },
                    }}
                >
                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    診療放射線技師
                                </p>
                                <h3 className="top-interview-name">染森さん</h3>
                            </div>
                            <p className="top-interview-text">
                                専門知識を習得し、早くから将来を見据えて行動できたことが、自分の自信に繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview02.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    臨床工学技士
                                </p>
                                <h3 className="top-interview-name">山崎さん</h3>
                            </div>
                            <p className="top-interview-text">
                                医療機器の知識はもちろん、患者さんと向き合う経験が、仕事への自信に繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview03.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    臨床検査技師
                                </p>
                                <h3 className="top-interview-name">中山さん</h3>
                            </div>
                            <p className="top-interview-text">
                                検査の知識はもちろん、責任ある業務を任された経験が、自信とやりがいに繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview04.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    臨床検査技師
                                </p>
                                <h3 className="top-interview-name">福島さん</h3>
                            </div>
                            <p className="top-interview-text">
                                日々の検査業務はもちろん、学び続けた経験が、判断力と自信に繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview05.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    フロントエンドエンジニア
                                </p>
                                <h3 className="top-interview-name">柴田さん</h3>
                            </div>
                            <p className="top-interview-text">
                                UI制作の知識はもちろん、試行錯誤を重ねた経験が、仕事への自信に大きく繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview06.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    システムエンジニア
                                </p>
                                <h3 className="top-interview-name">鈴木さん</h3>
                            </div>
                            <p className="top-interview-text">
                                設計や提案の知識はもちろん、多くの人と関わる経験が、自信とやりがいに繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview07.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    セキュリティエンジニア
                                </p>
                                <h3 className="top-interview-name">髙木さん</h3>
                            </div>
                            <p className="top-interview-text">
                                セキュリティの知識はもちろん、現場対応の経験が、大きな自信に繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview08.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    通信エンジニア
                                </p>
                                <h3 className="top-interview-name">竹内さん</h3>
                            </div>
                            <p className="top-interview-text">
                                幅広い技術の学びはもちろん、実機に触れた経験が、自信とやりがいに繋がりました！
                            </p>
                        </article>
                    </SplideSlide>

                    <SplideSlide>
                        <article className="top-interview-item">
                            <div className="top-interview-wrap">
                                <div className="top-interview-img">
                                    <img
                                        src="/img/img-interview09.jpg"
                                        alt=""
                                        decoding="async"
                                    />
                                </div>
                                <p className="top-interview-job">
                                    電気設備管理士
                                </p>
                                <h3 className="top-interview-name">木村さん</h3>
                            </div>
                            <p className="top-interview-text">
                                資格取得の学びはもちろん、現場で積んだ経験が、仕事への自信に繋がりました！
                            </p>
                        </article>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
};

export default Interview;
