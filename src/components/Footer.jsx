import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="l-footer">
            <div className="l-footer-wrap">
                <h2 className="l-footer-heading">
                    <Link className="l-footer-logo" to="/"></Link>

                    <div className="l-footer-text">Career Center</div>
                </h2>

                <nav className="l-footer-link">
                    <ul className="l-footer-link-list">
                        <li className="l-footer-link-item">
                            <Link to="/information">募集要項</Link>
                        </li>
                        <li className="l-footer-link-item">
                            <Link to="/entry">エントリー</Link>
                        </li>
                        <li className="l-footer-link-item">
                            <span>会社説明資料</span>
                            <div className="l-footer-link-icon"></div>
                        </li>
                        <li className="l-footer-link-item">
                            <span>コーポレートサイト</span>
                            <div className="l-footer-link-icon"></div>
                        </li>
                        <li className="l-footer-link-item">
                            <Link to="/privacy-policy">プライバシーポリシー</Link>
                        </li>
                    </ul>
                </nav>

                <div className="l-footer-sns">
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com">
                        <FontAwesomeIcon className="l-footer-sns-icon" icon={faXTwitter} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                        <FontAwesomeIcon className="l-footer-sns-icon" icon={faFacebook} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                        <FontAwesomeIcon className="l-footer-sns-icon" icon={faInstagram} />
                    </a>
                </div>
            </div>

            <small className="l-footer-copyright">©︎ RECRUIT SITE Inc.</small>
        </footer>
    );
};

export default Footer;
