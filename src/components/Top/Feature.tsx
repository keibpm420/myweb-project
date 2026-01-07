import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
    useLayoutEffect(() => {
        // タイトル全体（wrap）
        gsap.fromTo(
            ".top-feature-title",
            { y: 24, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".top-feature-title",
                    start: "top 85%",
                },
            }
        );

        // サブタイトル（最後の1行）
        gsap.fromTo(
            ".top-feature-text03",
            { y: 16, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".top-feature-title",
                    start: "top 80%",
                },
            }
        );

        // カード一覧
        gsap.fromTo(
            ".top-feature-item",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.25,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".top-feature-list",
                    start: "top 80%",
                },
            }
        );

        ScrollTrigger.refresh();
    }, []);

    return (
        <section className="top-feature u-ptb" id="feature">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english">feature</span>
                    <h2 className="c-title">特徴</h2>
                </div>

                <h3 className="top-feature-title">
                    <div className="top-feature-title-wrap">
                        <span className="top-feature-text">
                            キャリアセンター
                        </span>
                        <span className="top-feature-text02">なら</span>
                    </div>

                    <span className="top-feature-text03">
                        そんな問題を解決します
                    </span>
                </h3>

                <ol className="top-feature-list">
                    <li className="top-feature-item">
                        <div className="top-feature-item-img">
                            <img
                                src="/img/img-support.svg"
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h4 className="top-feature-item-title">
                            <span className="u-color-primary">
                                エキスパート
                            </span>
                            が対応
                        </h4>
                        <p className="top-feature-item-text">
                            <span>キャリアコンサルタント資格を</span>
                            <span>持つ教職員がサポートを行います。</span>
                        </p>
                    </li>

                    <li className="top-feature-item">
                        <div className="top-feature-item-img">
                            <img
                                src="/img/img-person.svg"
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h4 className="top-feature-item-title">
                            <span className="u-color-primary">個別相談</span>
                            が可能
                        </h4>
                        <p className="top-feature-item-text">
                            <span>学生一人ひとりの状況に合わせて、</span>
                            <span>個別で相談を受け付けています。</span>
                        </p>
                    </li>

                    <li className="top-feature-item">
                        <div className="top-feature-item-img">
                            <img
                                src="/img/img-step.svg"
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h4 className="top-feature-item-title">
                            段階に応じた
                            <span className="u-color-primary">支援</span>
                        </h4>
                        <p className="top-feature-item-text">
                            <span>学年や就活状況を考慮し、</span>
                            <span>必要なサポートを行います。</span>
                        </p>
                    </li>

                    <li className="top-feature-item">
                        <div className="top-feature-item-img">
                            <img
                                src="/img/img-advice.svg"
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h4 className="top-feature-item-title">
                            実践的な
                            <span className="u-color-primary">アドバイス</span>
                        </h4>
                        <p className="top-feature-item-text">
                            <span>履歴書添削や面接対策など、</span>
                            <span>実践を想定した指導を行います。</span>
                        </p>
                    </li>

                    <li className="top-feature-item">
                        <div className="top-feature-item-img">
                            <img
                                src="/img/img-wallet.svg"
                                alt=""
                                decoding="async"
                            />
                        </div>
                        <h4 className="top-feature-item-title">
                            学生向けの
                            <span className="u-color-primary">無料支援</span>
                        </h4>
                        <p className="top-feature-item-text">
                            <span>学内の支援サービスのため、</span>
                            <span>費用を気にせず利用できます。</span>
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Feature;
