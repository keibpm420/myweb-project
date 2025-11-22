import React, { useState, useRef, useEffect } from 'react';

// 子コンポーネント：1つのアコーディオン
const AccordionSingle = ({ id, question, answer, isOpen, onToggle }) => {
    const detailsRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;
        const animTiming = { duration: 300, easing: 'ease-out' };

        const h = content.scrollHeight;

        if (isOpen) {
            detailsRef.current.setAttribute('open', 'true');
            content.animate(
                [
                    { height: 0, opacity: 0 },
                    { height: h + 'px', opacity: 1 },
                ],
                animTiming
            );
        } else {
            if (detailsRef.current.hasAttribute('open')) {
                const anim = content.animate(
                    [
                        { height: h + 'px', opacity: 1 },
                        { height: 0, opacity: 0 },
                    ],
                    animTiming
                );
                anim.onfinish = () => detailsRef.current.removeAttribute('open');
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
            <div className="top-faq-item-answer" ref={contentRef} style={{ overflow: 'hidden' }}>
                <p className="top-faq-item-answer-inner">{answer}</p>
            </div>
        </details>
    );
};

// 親コンポーネント：FAQ全体
const Faq = () => {
    const [openId, setOpenId] = useState(null);

    const faqData = [
        {
            id: 1,
            question: '配属先や転勤先はどのように決まりますか？',
            answer: '本人の希望を優先して決定いたします。また、最終的な配属先や勤務地については、内定通知時に採用条件として記載しご案内いたします。',
        },
        {
            id: 2,
            question: '転勤の可能性はありますか？',
            answer: '転勤の可能性は基本的にありません。ただし、本人の希望があれば考慮し、可能な限り対応いたします。',
        },
        {
            id: 3,
            question: 'キャリアアップの制度はありますか？',
            answer: '当社ではキャリアアップを支援する制度を整えています。スキルに応じた研修制度や、定期的な面談を通じたキャリア相談の機会を設けており、本人の成長に合わせた昇進・昇格のチャンスもあります。また、新しい分野へのチャレンジや部署間異動の希望も考慮し、長期的に成長できる環境を提供しています。',
        },
        {
            id: 4,
            question: '服装や髪型などに関する規定はありますか？',
            answer: '服装や髪型に関する厳格な規定はありません。オフィスカジュアルを基本とし、自由なスタイルで働ける環境です。ただし、クライアントとの打ち合わせや外部対応の際は、TPOに応じた服装をお願いすることがあります。',
        },
        {
            id: 5,
            question: '副業は可能ですか？',
            answer: '当社では副業を認めています。 ただし、本業に支障をきたさないこと、競業にあたらないことなど、一定のルールを設けています。具体的な条件や手続きについては、社内規定に基づき個別にご相談ください。',
        },
    ];

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <>
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
        </>
    );
};

export default Faq;
