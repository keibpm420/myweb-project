import React, { useState } from "react";

const Flow = () => {
    const [tab, setTab] = useState("free");

    const flowData = [
        {
            step: "Step 01",
            title: "自由に資料閲覧",
            text: [
                "平日の8:30〜18:00に開室してます。",
                "資料を自由に閲覧してください。",
            ],
        },
        {
            step: "Step 02",
            title: "相談員に質問",
            text: [
                "気になることや就活の悩みは、",
                "相談員に自由に相談できます。",
            ],
        },
        {
            step: "Step 03",
            title: "活用プランを考える",
            text: [
                "閲覧した資料や相談内容をもとに、",
                "支援の活用方法を計画しましょう。",
            ],
        },
    ];

    return (
        <section className="top-flow u-ptb" id="flow">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english">flow</span>
                    <h2 className="c-title">ご利用の流れ</h2>
                </div>

                <p className="top-flow-note">
                    <span>スクロールできます</span>
                    <img
                        src="/img/icon-pointer-right.svg"
                        width=""
                        height=""
                        alt=""
                        decoding="async"
                    />
                </p>

                <div className="top-flow-wrap">
                    <div className="top-flow-list">
                        {flowData.map((item, index) => (
                            <React.Fragment key={index}>
                                <section className="top-flow-section">
                                    <h3 className="top-flow-title">
                                        {item.title}
                                    </h3>
                                    <p className="top-flow-text">
                                        {item.text.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </p>
                                </section>

                                {index !== flowData.length - 1 && (
                                    <div className="top-flow-triangle"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;
