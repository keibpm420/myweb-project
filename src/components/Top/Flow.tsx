const Flow = () => {
    return (
        <section className="top-flow u-ptb" id="flow">
            <div className="l-container c-title-wrap u-mb40">
                <span className="c-title-english">flow</span>
                <h2 className="c-title">ご利用の流れ</h2>
            </div>

            <p className="top-flow-note">
                <span>スクロールできます</span>
                <img
                    src="/img/icon-pointer-right.svg"
                    alt=""
                    decoding="async"
                />
            </p>

            <div className="top-flow-wrap">
                <div className="top-flow-list">
                    <section className="top-flow-section">
                        <h3 className="top-flow-title">利用予約をする</h3>
                        <p className="top-flow-text">
                            <span>Webフォームから希望日時を、</span>
                            <span>選択して事前に利用予約を行います。</span>
                        </p>
                    </section>

                    <div className="top-flow-triangle"></div>

                    <section className="top-flow-section">
                        <h3 className="top-flow-title">予約時間に来室・受付</h3>
                        <p className="top-flow-text">
                            <span>予約した日時に来室し、</span>
                            <span>受付で簡単なチェックインを行います。</span>
                        </p>
                    </section>

                    <div className="top-flow-triangle"></div>

                    <section className="top-flow-section">
                        <h3 className="top-flow-title">サービスを利用する</h3>
                        <p className="top-flow-text">
                            <span>相談や資料閲覧など、予約した</span>
                            <span>内容に沿ってサービスを利用します。</span>
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Flow;
