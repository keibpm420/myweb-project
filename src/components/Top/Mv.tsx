import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Mv = () => {
    const textRef = useRef(null);
    const text02Ref = useRef(null);
    const listRef = useRef(null);
    const buttonWrapRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // text
            gsap.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.1,
            });
            // text02
            gsap.to(text02Ref.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.2,
            });
            // listのli
            gsap.to(listRef.current?.children, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.4,
            });
            // ボタン
            gsap.to(buttonWrapRef.current?.children, {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.4, // リストのあと少し遅らせる
            });

            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power2.out",
                delay: 0.2, // 少し遅らせて最後に
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="top-mv" id="mv">
            <div className="top-mv-head">
                <div className="top-mv-wrap">
                    <p className="top-mv-text" ref={textRef}>
                        <span>履歴書・面接・エントリーシート</span>
                        <span></span>
                        <span>就活で悩んでいませんか？</span>
                    </p>
                    <p className="top-mv-text02" ref={text02Ref}>
                        <span>就活の悩み、</span>
                        <span>相談に乗ります。</span>
                    </p>
                    <ul className="top-mv-list" ref={listRef}>
                        <li className="top-mv-item">履歴書対策</li>
                        <li className="top-mv-item">面接対策</li>
                        <li className="top-mv-item">卒業生の声</li>
                        <li className="top-mv-item">就職サポート</li>
                        <li className="top-mv-item">キャリア支援</li>
                        <li className="top-mv-item">個別面談</li>
                    </ul>

                    <div className="top-mv-button-wrap" ref={buttonWrapRef}>
                        <Link
                            className="top-mv-button top-mv-button--reserve"
                            to="/reservations"
                        >
                            相談の予約をする
                        </Link>

                        <Link
                            className="top-mv-button top-mv-button--jobs"
                            to="/job"
                        >
                            求人情報を見る
                        </Link>
                    </div>
                </div>
            </div>

            <div className="top-mv-image" ref={imageRef}>
                <img
                    src="/img/img-support04.jpg"
                    width="530"
                    height="471"
                    alt=""
                    decoding="async"
                />
            </div>
        </div>
    );
};

export default Mv;
