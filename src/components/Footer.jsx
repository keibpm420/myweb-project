import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="footer-head">
                    <h2 className="footer-logo">
                        <img src="https://placehold.jp/200x30.png" alt="ダミー画像" width="200" height="30" />
                        <div className="footer-text">採用サイト</div>
                    </h2>
                    <div className="footer-sns">
                        <img src="https://placehold.jp/17x20.png" alt="" />
                        <img src="https://placehold.jp/17x20.png" alt="" />
                        <img src="https://placehold.jp/17x20.png" alt="" />
                    </div>
                </div>

                <div className="footer-body">
                    <nav className="footer-link">
                        <Link to="/information"> 募集要項</Link>
                        <Link to="/entry">エントリー</Link>
                        <Link to="/">会社説明資料</Link>
                        <Link to="/">コーポレートサイト</Link>
                        <Link to="/privacy-policy">プライバシーポリシー</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
