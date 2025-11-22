import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="footer-head">
                    <h2 className="footer-heading">
                        <div className="footer-logo">
                            <Link className="header-logo" to="/">
                                <img
                                    src="https://placehold.jp/200x30.png"
                                    alt="ダミー画像"
                                    width="200"
                                    height="30"
                                />
                            </Link>
                        </div>
                        <div className="footer-text">採用サイト</div>
                    </h2>

                    <div className="footer-sns">
                        <a href="https://twitter.com">
                            <FontAwesomeIcon className="footer-sns-icon" icon={faXTwitter} />
                        </a>
                        <a href="https://www.facebook.com">
                            <FontAwesomeIcon className="footer-sns-icon" icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com">
                            <FontAwesomeIcon className="footer-sns-icon" icon={faInstagram} />
                        </a>
                    </div>
                </div>

                <nav className="footer-link">
                    <ul>
                        <li>
                            <Link className="footer-link-item" to="/information">
                                募集要項
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-item" to="/entry">
                                エントリー
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-item" to="/">
                                <span>会社説明資料</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    fill="#ffffff"
                                >
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-item" to="/">
                                <span>コーポレートサイト</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    fill="#ffffff"
                                >
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-item" to="/privacy-policy">
                                プライバシーポリシー
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <p className="footer-copyright">
                <small>©︎ RECRUIT SITE Inc.</small>
            </p>
        </footer>
    );
};

export default Footer;
