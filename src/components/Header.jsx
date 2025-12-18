import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [isOpenHeaderMenu, setIsOpenHeaderMenu] = useState(false);

    const toggleHeaderMenu = () => {
        setIsOpenHeaderMenu(!isOpenHeaderMenu);
    };

    const headerNavItem = [
        { href: "#about", text: "私たちについて" },
        { href: "#interview", text: "社員の声" },
        { href: "#topics", text: "積極採用" },
        { href: "#workplace", text: "はたらく環境" },
        { href: "#flow", text: "選考フロー" },
        { href: "#faq", text: "よくあるご質問" },
    ];

    return (
        <header className="l-header">
            <h1 className="l-header-title">
                <Link className="l-header-logo" to="/">
                    Career Center
                </Link>
            </h1>

            <div className="l-header-button-wrap">
                <Button
                    className="c-button c-button--small u-hide--sp"
                    to="/"
                    type="Link"
                >
                    相談の予約をする
                </Button>

                <Button
                    className="c-button c-button--white c-button--small u-hide--sp"
                    href="https://www.tec-scs.jp/"
                    type="a"
                >
                    求人情報を見る
                </Button>

                {isHome && (
                    <Icon
                        type="button"
                        className="c-icon c-icon--blue c-icon--large"
                        onClick={toggleHeaderMenu}
                    />
                )}
            </div>

            {isOpenHeaderMenu && (
                <>
                    <div
                        className="l-header-overlay"
                        onClick={toggleHeaderMenu}
                    ></div>
                </>
            )}

            <nav
                className={`l-header-nav ${
                    isOpenHeaderMenu ? "is-header-nav-open" : ""
                }`}
                id="l-header-nav"
            >
                <div className="l-header-close-button-wrap">
                    <Icon
                        type="button"
                        className="c-icon c-icon--blue c-icon--close c-icon--large"
                        onClick={toggleHeaderMenu}
                    />
                </div>

                <ul className="l-header-list">
                    {headerNavItem.map((item, i) => {
                        return (
                            <li key={i} className="l-header-item">
                                <a onClick={toggleHeaderMenu} href={item.href}>
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="l-header-nav-button-wrap">
                    <Link
                        className="c-button c-button--large c-button--entry"
                        to="/entry"
                    >
                        エントリー
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
