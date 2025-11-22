// import React, { useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';
import Faq from '../components/Home/Faq';
import '../styles/components/_title.scss';

const Home = () => {
    const options = {
        type: 'loop',
        arrows: false,
        pagination: false,
        drag: false,
        autoWidth: true,
        perPage: 1, // ← 重要！1個ずつスライドさせる
        gap: '32px', // ← スライド間の余白
        autoScroll: {
            speed: 0.5, // ← 流れる速さ
            pauseOnHover: false,
        },
    };

    return (
        <main className="top">
            <section className="top-mv" id="mv"></section>

            <section className="top-read" id="read">
                <p className="top-read-text">
                    重要なのは、技術やスキルだけではなく「伝えたい想いに寄り添う姿勢」。
                    <br />
                    私たちは、アイデアを形にし、成果につなげるクリエイティブの力で、
                    <br />
                    クライアントの成功をサポートします。
                    <br />
                    「もっと良くしたい」「新しいことに挑戦したい」
                    <br />
                    ——そんな情熱を持った方と一緒に働けるのを楽しみにしています。
                    <br />
                </p>

                <div className="top-read-carousel">
                    <Splide options={options} extensions={{ AutoScroll }} aria-label="キャッチコピー">
                        <SplideSlide>
                            <p className="top-read-carousel-text">Let's grow together</p>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>

            <section className="top-about" id="about">
                <div className="l-container">
                    <span className="c-title-level2-english">about</span>
                    <h2 className="c-title-level2">私たちについて</h2>
                </div>
            </section>

            <section className="top-interview" id="interview">
                <div className="l-container">
                    <span className="c-title-level2-english">interview</span>
                    <h2 className="c-title-level2">社員の声</h2>
                </div>
            </section>

            <section className="top-topics" id="topics">
                <div className="l-container">
                    <span className="c-title-level2-english c-title-level2-english--white">topics</span>
                    <h2 className="c-title-level2 c-title-level2--white">
                        <span>バックエンドエンジニア</span>
                        <span>積極採用中</span>
                    </h2>
                </div>
            </section>

            <section className="top-workplace" id="workplace">
                <div className="l-container">
                    <span className="c-title-level2-english">workplace</span>
                    <h2 className="c-title-level2">はたらく環境</h2>
                </div>
            </section>

            <section className="top-flow" id="flow">
                <div className="l-container">
                    <span className="c-title-level2-english">flow</span>
                    <h2 className="c-title-level2">選考フロー</h2>

                    <ul className="top-flow-list">
                        <li className="top-flow-item">
                            <span className="top-flow-label">STEP 01</span>
                            <h3 className="top-flow-title">エントリー</h3>
                            <p className="top-flow-text">
                                当サイトの「エントリー」より、フォームに必要事項を入力して送信してください。
                            </p>
                        </li>
                        <li className="top-flow-item">
                            <span className="top-flow-label">STEP 02</span>
                            <h3 className="top-flow-title">書類選考</h3>
                            <p className="top-flow-text">
                                エントリーから3営業日以内にメールにて書類を送付します。
                            </p>
                        </li>
                        <li className="top-flow-item">
                            <span className="top-flow-label">STEP 03</span>
                            <h3 className="top-flow-title">一次面接</h3>
                            <p className="top-flow-text">合わせて適性検査を受けていただきます。</p>
                        </li>
                        <li className="top-flow-item">
                            <span className="top-flow-label">STEP 04</span>
                            <h3 className="top-flow-title">二次面接</h3>
                            <p className="top-flow-text">役員との面接を実施します。</p>
                        </li>
                        <li className="top-flow-item">
                            <span className="top-flow-label">STEP 05</span>
                            <h3 className="top-flow-title">社長面接</h3>
                            <p className="top-flow-text">社長との面接を実施します。</p>
                        </li>
                        <li className="top-flow-item">
                            <span className="top-flow-label">STEP 06</span>
                            <h3 className="top-flow-title">内定</h3>
                            <p className="top-flow-text">
                                社長面接実施日より1週間以内にメールにてご連絡いたします。
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="top-faq" id="faq">
                <div className="l-container">
                    <span className="c-title-level2-english">faq</span>
                    <h2 className="c-title-level2">よくあるご質問</h2>
                    <div className="top-faq-wrap">
                        <Faq />
                    </div>
                </div>
            </section>

            <section className="top-cta" id="cta">
                <h3 className="c-title-level2-english c-title-level2-english--white">information</h3>
                <h3 className="c-title-level3">募集概要</h3>
            </section>
        </main>
    );
};

export default Home;
