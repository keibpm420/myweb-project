import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    // useLocationでパス（URL）によって処理を分岐できる
    const location = useLocation();
    const isHome = location.pathname === '/';

    // useStateでトグルメニューを管理する
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="header-heading">
                    <Link className="header-logo" to="/">
                        <img src="https://placehold.jp/200x30.png" alt="ダミー画像" width="200" height="30" />
                    </Link>
                    <p className="header-text">採用サイト</p>
                </h1>

                <div className="header-button-list">
                    <Link className="c-header-button c-header-button-info" to="/information">
                        <span>募集要項</span>
                    </Link>
                    <Link className="c-header-button c-header-button-entry" to="/entry">
                        <span>エントリー</span>
                    </Link>

                    {isHome && (
                        <button
                            className="header-menu-button"
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-controls="header-nav"
                            aria-label="メニューを開く"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 -960 960 960"
                            >
                                <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {isOpen && <div className="header-overlay" onClick={toggleMenu}></div>}

            <nav id="header-nav" className={`header-nav ${isOpen ? 'header-nav--open' : ''}`}>
                <div className="header-nav-button">
                    <button
                        className="header-menu-button"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="header-nav"
                        aria-label="メニューを閉じる"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 -960 960 960"
                        >
                            <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                        </svg>{' '}
                    </button>
                </div>

                <ul className="header-nav-list">
                    <li>
                        <a href="#about">私たちについて</a>
                    </li>
                    <li>
                        <a href="#interview">社員の声</a>
                    </li>
                    <li>
                        <a href="#topics">積極採用</a>
                    </li>
                    <li>
                        <a href="#workplace">はたらく環境</a>
                    </li>
                    <li>
                        <a href="#flow">選考フロー</a>
                    </li>
                    <li>
                        <a href="#faq">よくあるご質問</a>
                    </li>
                </ul>

                <div className="header-nav-button-list">
                    <Link
                        className="c-header-button c-header-button-info c-header-button--large"
                        to="/information"
                    >
                        <span>募集要項</span>
                    </Link>

                    <Link
                        className="c-header-button c-header-button-entry c-header-button--large"
                        to="/entry"
                    >
                        <span>エントリー</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
