import React, { useState, useRef, useEffect } from "react";

const AccordionSingle = ({ id, question, answer, isOpen, onToggle }) => {
    const detailsRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;
        const animTiming = { duration: 300, easing: "ease-out" };

        const h = content.scrollHeight;

        if (isOpen) {
            detailsRef.current.setAttribute("open", "true");
            content.animate(
                [
                    { height: 0, opacity: 0 },
                    { height: h + "px", opacity: 1 },
                ],
                animTiming
            );
        } else {
            if (detailsRef.current.hasAttribute("open")) {
                const anim = content.animate(
                    [
                        { height: h + "px", opacity: 1 },
                        { height: 0, opacity: 0 },
                    ],
                    animTiming
                );
                anim.onfinish = () =>
                    detailsRef.current.removeAttribute("open");
            }
        }
    }, [isOpen]);

    return (
        <details className="top-faq-item" ref={detailsRef}>
            <summary
                className="top-faq-item-question"
                onClick={(e) => {
                    e.preventDefault();
                    onToggle(id);
                }}
            >
                {question}
            </summary>
            <div
                className="top-faq-item-answer"
                ref={contentRef}
                style={{ overflow: "hidden" }}
            >
                <p className="top-faq-item-answer-inner">{answer}</p>
            </div>
        </details>
    );
};

const Faq = () => {
    const [openId, setOpenId] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "キャリアセンターではどんなサポートを受けられますか？",
            answer: "履歴書やエントリーシートの書き方、面接対策、自己分析、業界研究など、就職活動に必要なサポートをマンツーマンで受けられます。専任教職員とキャリアコンサルタントが連携して支援します。",
        },
        {
            id: 2,
            question: "個別相談はできますか？",
            answer: "はい、個別相談を随時受け付けています。進路の不安や希望の企業への応募、資格取得に関する相談など、自分の状況に合わせてアドバイスをもらえます。",
        },
        {
            id: 3,
            question: "学内で会社説明会はありますか？",
            answer: "はい、学校独自のネットワークを活かして、学内会社説明会や求人紹介を定期的に実施しています。希望の分野に沿った企業とのマッチングが可能です。",
        },
        {
            id: 4,
            question: "卒業生の体験談を聞けますか？",
            answer: "はい、就職した卒業生による体験談や働きはじめてからの感想を紹介しています。業界や職種、働き方のイメージをつかむ参考になります。",
        },
        {
            id: 5,
            question: "資料や情報はどこで確認できますか？",
            answer: "キャリアセンターには業界地図、求人票、面接対策本などの資料を完備しています。PCを使った求人検索も可能で、企業情報やインターン情報も閲覧できます。",
        },
        {
            id: 6,
            question: "就職活動の相談は何回でもできますか？",
            answer: "はい、何回でも相談可能です。進路や応募企業の相談、面接練習など、自分のペースで繰り返し利用できます。",
        },
        {
            id: 7,
            question: "資格取得やスキルアップもサポートしてもらえますか？",
            answer: "はい、キャリアセンターではスキルアップ支援や資格取得のアドバイスも行っています。個別相談を通じて自分に合った学習プランを提案してもらえます。",
        },
    ];

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="top-faq u-ptb" id="faq">
            <div className="l-container">
                <div className="c-title-wrap u-mb40">
                    <span className="c-title-english">faq</span>
                    <h2 className="c-title">質問</h2>
                </div>
            </div>

            {faqData.map((faq) => (
                <AccordionSingle
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openId === faq.id}
                    onToggle={handleToggle}
                />
            ))}
        </section>
    );
};

export default Faq;
