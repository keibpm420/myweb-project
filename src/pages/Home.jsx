import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';
import Faq from '../components/Home/Faq';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TrainRoundedIcon from '@mui/icons-material/TrainRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { Link } from 'react-router-dom';

const Home = () => {
    const option_auto_scroll = {
        type: 'loop',
        arrows: false,
        pagination: false,
        drag: false,
        autoWidth: true,
        perPage: 1,
        gap: '32px',
        autoScroll: {
            speed: 0.5,
            pauseOnHover: false,
        },
    };

    return (
        <main className="top">
            <div className="top-mv" id="mv">
                <Splide
                    options={option_auto_scroll}
                    extensions={{ AutoScroll }}
                    aria-label="メインビジュアル"
                >
                    <SplideSlide>
                        <div className="top-mv-img">
                            <img
                                src="https://placehold.jp/643x654.png?text=1"
                                alt="メインビジュアル1"
                                width="643"
                                height="654"
                            />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="top-mv-img">
                            <img
                                src="https://placehold.jp/643x654.png?text=2"
                                alt="メインビジュアル2"
                                width="643"
                                height="654"
                            />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="top-mv-img">
                            <img
                                src="https://placehold.jp/643x654.png?text=3"
                                alt="メインビジュアル3"
                                width="643"
                                height="654"
                            />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="top-mv-img">
                            <img
                                src="https://placehold.jp/643x654.png?text=4"
                                alt="メインビジュアル4"
                                width="643"
                                height="654"
                            />
                        </div>
                    </SplideSlide>
                </Splide>

                <div className="top-mv-copy">
                    <span className="top-mv-copy-text">想像力でつなぐ、</span>
                    <div className="break" />
                    <span className="top-mv-copy-text">クリエイティブの未来図。</span>
                </div>

                <a href="" className="top-mv-news">
                    <div className="top-mv-news-inner">
                        <span className="top-mv-news-date">2025/3/1 13:00</span>
                        <p className="top-mv-news-title">社員インタビューを新たに追加しました</p>
                    </div>
                </a>
            </div>

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
                    <Splide
                        options={option_auto_scroll}
                        extensions={{ AutoScroll }}
                        aria-label="キャッチコピー"
                    >
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

                    <div className="top-about-wrap">
                        <div className="top-about-head">
                            <p className="top-about-description">
                                私たちは、デザインやシステム開発を通じて、理想をカタチにする制作会社です。クライアントの想いに寄り添いながら課題を解決し、価値あるデザインとシステムを提供します。
                            </p>
                            <p className="top-about-description">
                                課題解決のために本質を見極め、常に新しい視点で創造し、期待を超える成果を生み出すことが私たちの使命です。
                            </p>
                            <p className="top-about-description">
                                人と人、企業と社会をつなぎ、より豊かで活気ある未来の実現に貢献していきます。
                            </p>

                            <div className="top-about-cta-wrap">
                                <button className="top-about-cta">
                                    <span>コーポレートサイト</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                                    </svg>
                                </button>
                                <button className="top-about-cta">
                                    <span>会社説明資料</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="top-about-img">
                            <img
                                src="https://placehold.jp/1297x1024.png"
                                alt="ダミー画像"
                                width="1297"
                                height="1024"
                            />
                        </div>
                    </div>

                    <h3 className="c-title-level4">特徴/強み</h3>

                    <ul className="top-about-feature">
                        <li className="top-about-feature-item">
                            <span className="top-about-feature-label">POINT 01</span>
                            <h3 className="top-about-feature-title">
                                制作実績1000件以上
                                <br />
                                多様な案件に挑戦できる
                            </h3>
                            <p className="top-about-feature-text">
                                現在、100社を超えるクライアント様とのお取引があり、その業種はアパレルや食品、イベント関係などさまざまです。
                            </p>
                        </li>
                        <li className="top-about-feature-item">
                            <span className="top-about-feature-label">POINT 02</span>
                            <h3 className="top-about-feature-title">実績豊富な先輩社員が 数多く在籍</h3>
                            <p className="top-about-feature-text">
                                これまで数多くの案件を対応してきた先輩社員が1on1でサポートします。基礎知識講座から実践まで研修制度も充実しているので、未経験の方でも着実に成長できます。
                            </p>
                        </li>
                        <li className="top-about-feature-item">
                            <span className="top-about-feature-label">POINT 03</span>
                            <h3 className="top-about-feature-title">安定した売上と新たな挑戦</h3>
                            <p className="top-about-feature-text">
                                創業から今日まで売上増加を記録し、多くのクライアントから信頼をいただいています。安定した業績を背景に、新たなサービス拡充にも積極的に取り組んでいます。
                            </p>
                        </li>
                    </ul>

                    <h3 className="c-title-level4">事業内容</h3>

                    <div className="top-about-business">
                        <section className="top-about-business-item">
                            <div className="top-about-business-img">
                                <img src="https://placehold.jp/600x321.png" alt="ダミー画像" />
                            </div>
                            <h3 className="top-about-business-title">コンサルティング/マーケティング支援</h3>
                            <p className="top-about-business-text">
                                クライアントのビジネス課題に向き合い、戦略立案から施策実行までをトータルで支援します。市場分析やターゲット設定を基に、効果的なプロモーションやブランディングを提案。成果につながる戦略的なアプローチで、企業の成長を後押しします。
                            </p>
                        </section>

                        <section className="top-about-business-item">
                            <div className="top-about-business-img">
                                <img src="https://placehold.jp/600x321.png" alt="ダミー画像" />
                            </div>
                            <h3 className="top-about-business-title">システム開発</h3>
                            <p className="top-about-business-text">
                                業務効率化やビジネス拡大を実現するためのシステムを設計・開発します。クライアントの要望に応じた柔軟なシステム構築により、業務の自動化やデータ活用の最適化をサポートします。
                            </p>
                        </section>

                        <section className="top-about-business-item">
                            <div className="top-about-business-img">
                                <img src="https://placehold.jp/600x321.png" alt="ダミー画像" />
                            </div>
                            <h3 className="top-about-business-title">ブランディング支援/制作</h3>
                            <p className="top-about-business-text">
                                ブランドの魅力を最大限に引き出すクリエイティブを提供します。ロゴやWebサイト、広告ビジュアルなど、デザインを通じてクライアントのメッセージを伝え、ユーザーの心に響く体験を生み出します。
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <section className="top-interview" id="interview">
                <div className="c-corner-mask c-corner-mask--primary10"></div>
                <div className="l-container">
                    <span className="c-title-level2-english">interview</span>
                    <h2 className="c-title-level2">社員の声</h2>
                    <p className="top-interview-text">
                        各事業部ではたらく社員のリアルな声とともに、
                        <br />
                        1日のスケジュールや部署の雰囲気、具体的な業務内容などの情報をお届けします。
                    </p>
                </div>

                <div className="top-interview-carousel">
                    <Splide
                        options={{
                            type: 'loop', // ループさせる
                            perPage: 5, // 1ページに表示するスライド数
                            perMove: 1, // 移動するスライド数
                            gap: '1rem', // スライド間の間隔
                            autoplay: true, // 自動再生
                            pagination: false,
                        }}
                    >
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://placehold.jp/400x500.png" alt="" width="500" height="500" />
                        </SplideSlide>
                    </Splide>
                </div>
            </section>

            <section className="top-topics" id="topics">
                <div className="c-corner-mask c-corner-mask--primary20"></div>

                <div className="l-container">
                    <span className="c-title-level2-english c-title-level2-english--white">topics</span>
                    <h2 className="c-title-level2 c-title-level2--white">
                        <span>バックエンドエンジニア</span>
                        <span>積極採用中</span>
                    </h2>

                    <div className="top-topics-inner">
                        <div className="top-topics-head">
                            <div className="top-topics-head-inner">
                                <p>
                                    私たちは、より良いサービスを提供するため、バックエンドエンジニアを積極的に募集しています。
                                </p>
                                <p>
                                    新しい技術に挑戦し、チームと共に成長したい方を歓迎します。あなたのスキルを活かし、未来を一緒に築きませんか？
                                </p>
                                <p>挑戦を楽しめる方、ぜひご応募ください。</p>
                            </div>

                            <div className="top-topics-button-list">
                                <Link to="/information" className="top-topics-button top-topics-button--info">
                                    <span>募集要項を見る</span>
                                    <div className="top-topics-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="14px"
                                            viewBox="0 -960 960 960"
                                            width="14px"
                                        >
                                            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link to="/entry" className="top-topics-button top-topics-button--entry">
                                    <span>エントリーする</span>
                                    <div className="top-topics-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="14px"
                                            viewBox="0 -960 960 960"
                                            width="14px"
                                        >
                                            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="top-topics-img">
                            <img src="https://placehold.jp/768x600.png" alt="ダミー画像" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="top-workplace" id="workplace">
                <div className="c-corner-mask c-corner-mask--primary"></div>
                <div className="l-container">
                    <span className="c-title-level2-english">workplace</span>
                    <h2 className="c-title-level2">はたらく環境</h2>

                    <div className="top-workplace-wrap">
                        <p className="top-workplace-text">
                            社員一人ひとりが安心して働きながら成長できる環境づくりに力を入れています。
                            <br />
                            働きやすさを支える各種制度や充実した福利厚生に加え、データで見る当社の特徴を紹介します。
                            <br />
                            多様なライフスタイルやキャリアの実現をサポートする取り組みを通じて、社員が長く活躍できる職場を目指しています。
                        </p>

                        <div className="top-workplace-img">
                            <img src="https://placehold.jp/768x600.png" alt="ダミー画像" />
                        </div>
                    </div>

                    <h3 className="c-title-level4">数字で見る私たち</h3>

                    <ul className="top-workplace-stats">
                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">従業員数</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">200</span>
                                <span className="top-workplace-stats-unit">名</span>
                            </div>
                        </li>

                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">男女比</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">6:4</span>
                                <span className="top-workplace-stats-unit"></span>
                            </div>
                        </li>

                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">平均年齢</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">32</span>
                                <span className="top-workplace-stats-unit">歳</span>
                            </div>
                        </li>

                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">育休取得率</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">100</span>
                                <span className="top-workplace-stats-unit">%</span>
                            </div>
                        </li>

                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">平均有給取得日数</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">8</span>
                                <span className="top-workplace-stats-unit">日</span>
                            </div>
                        </li>

                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">月平均残業時間</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">12.7</span>
                                <span className="top-workplace-stats-unit">時間</span>
                            </div>
                        </li>

                        <li className="top-workplace-stats-item">
                            <h4 className="top-workplace-stats-label">年間休日</h4>
                            <div className="top-workplace-stats-wrap">
                                <span className="top-workplace-stats-value">120</span>
                                <span className="top-workplace-stats-unit">日</span>
                            </div>
                        </li>
                    </ul>

                    <h3 className="c-title-level4">福利厚生/各種制度</h3>

                    <ul className="top-workplace-benefits">
                        {/* 1. 家賃補助 (HomeRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <HomeRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">家賃補助</h3>
                                <p className="top-workplace-benefits-text">
                                    会社から2km以内にお住まいの方に月2万円の家賃補助を支給
                                </p>
                            </div>
                        </li>

                        {/* 2. 交通費 (TrainRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <TrainRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">交通費支給</h3>
                                <p className="top-workplace-benefits-text">
                                    交通費を会社が負担（上限：月2万円）
                                </p>
                            </div>
                        </li>

                        {/* 3. 健康診断 (FavoriteRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <FavoriteRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">健康診断</h3>
                                <p className="top-workplace-benefits-text">会社が全額負担（年に1回実施）</p>
                            </div>
                        </li>

                        {/* 4. 各種手当 (AttachMoneyRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <AttachMoneyRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">各種手当</h3>
                                <p className="top-workplace-benefits-text">
                                    役職手当、職務手当、家族手当など
                                </p>
                            </div>
                        </li>

                        {/* 5. 資格取得支援 (EditRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <EditRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">資格取得支援</h3>
                                <p className="top-workplace-benefits-text">
                                    業務に役立つ資格の取得費用を支援
                                </p>
                            </div>
                        </li>

                        {/* 6. 書籍購入補助 (BookRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <BookRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">書籍購入補助</h3>
                                <p className="top-workplace-benefits-text">
                                    業務に役立つ本の購入を月に1冊まで会社が全額負担
                                </p>
                            </div>
                        </li>

                        {/* 7. フレックスタイム制 (AccessTimeRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <AccessTimeRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">フレックスタイム制</h3>
                                <p className="top-workplace-benefits-text">
                                    コアタイム中の出社を条件に出勤・退勤時間を自由に調整可能
                                </p>
                            </div>
                        </li>

                        {/* 8. リモートワーク (DesktopWindowsRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <DesktopWindowsRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">リモートワーク</h3>
                                <p className="top-workplace-benefits-text">
                                    週に2日リモートワークの実施が可能（入社1年以上の社員に限る）
                                </p>
                            </div>
                        </li>

                        {/* 9. 社員総会 (GroupsRoundedIcon) */}
                        <li className="top-workplace-benefits-item">
                            <div className="top-workplace-benefits-icon">
                                <GroupsRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                            </div>
                            <div className="top-workplace-benefits-body">
                                <h3 className="top-workplace-benefits-title">社員総会</h3>
                                <p className="top-workplace-benefits-text">年に1回実施</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="top-flow" id="flow">
                <div className="c-corner-mask c-corner-mask--white"></div>
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
                <div className="c-corner-mask c-corner-mask--primary-pastel"></div>
                <div className="l-container">
                    <span className="c-title-level2-english">faq</span>
                    <h2 className="c-title-level2">よくあるご質問</h2>
                    <div className="top-faq-wrap">
                        <Faq />
                    </div>
                </div>
            </section>

            <div className="top-cta" id="cta">
                <div className="top-cta-inner">
                    <Link to="/information" className="top-cta-button top-cta-button--info">
                        <div className="">
                            <span className="c-title-level2-english c-title-level2-english--white">
                                information
                            </span>
                            <h3 className="c-title-level3">募集概要</h3>
                        </div>
                        <div className="c-corner-mask c-corner-mask--primary20"></div>
                    </Link>

                    <Link to="/entry" className="top-cta-button top-cta-button--entry">
                        <div className="">
                            <span className="c-title-level2-english c-title-level2-english--white">
                                entry
                            </span>
                            <h3 className="c-title-level3">エントリー</h3>
                        </div>
                        <div className="c-corner-mask c-corner-mask--primary"></div>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Home;
