import React, { useState } from "react";

const Flow = () => {
    const [tab, setTab] = useState("free");

    const flowData = [
        {
            step: "Step 01",
            title: "利用予約をする",
            text: [
                "Webフォームから希望日時を、",
                "選択して事前に利用予約を行います。",
            ],
        },
        {
            step: "Step 02",
            title: "予約時間に来室・受付",
            text: [
                "予約した日時に来室し、",
                "受付で簡単なチェックインを行います。",
            ],
        },
        {
            step: "Step 03",
            title: "サービスを利用する",
            text: [
                "相談や資料閲覧など、予約した",
                "内容に沿ってサービスを利用します。",
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
