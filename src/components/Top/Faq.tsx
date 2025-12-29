const Faq = () => {
    type faqList = {
        question: string;
        answer: string;
    };

    const faqTextList: faqList[] = [
        {
            question: "どんなサポートを受けられますか？",
            answer: "履歴書やエントリーシートの書き方、面接対策、自己分析、業界研究など、就職活動に必要なサポートをマンツーマンで受けられます。専任教職員とキャリアコンサルタントが連携して支援します。",
        },
        {
            question: "個別相談はできますか？",
            answer: "はい、個別相談を随時受け付けています。進路の不安や希望の企業への応募、資格取得に関する相談など、自分の状況に合わせてアドバイスをもらえます。",
        },
        {
            question: "学内で会社説明会はありますか？",
            answer: "はい、学校独自のネットワークを活かして、学内会社説明会や求人紹介を定期的に実施しています。希望の分野に沿った企業とのマッチングが可能です。",
        },
        {
            question: "卒業生の体験談を聞けますか？",
            answer: "はい、就職した卒業生による体験談や働きはじめてからの感想を紹介しています。業界や職種、働き方のイメージをつかむ参考になります。",
        },
        {
            question: "資料や情報はどこで確認できますか？",
            answer: "キャリアセンターには業界地図、求人票、面接対策本などの資料を完備しています。PCを使った求人検索も可能で、企業情報やインターン情報も閲覧できます。",
        },
        {
            question: "就職活動の相談は何回でもできますか？",
            answer: "はい、何回でも相談可能です。進路や応募企業の相談、面接練習など、自分のペースで繰り返し利用できます。",
        },
        {
            question: "資格取得やスキルアップもサポートしてもらえますか？",
            answer: "はい、キャリアセンターではスキルアップ支援や資格取得のアドバイスも行っています。個別相談を通じて自分に合った学習プランを提案してもらえます。",
        },
    ];

    return (
        <section className="top-faq u-ptb" id="faq">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english c-title-english">faq</span>
                    <h2 className="c-title c-title">よくある質問</h2>
                </div>

                <div className="top-faq-wrap">
                    {faqTextList.map((data, index) => (
                        <details className="top-faq-item" key={index}>
                            <summary className="top-faq-question">
                                {data.question}
                            </summary>
                            <div className="top-faq-answer">{data.answer}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
