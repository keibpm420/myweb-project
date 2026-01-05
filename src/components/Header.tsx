import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        gsap.fromTo(
            headerRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);

    const location = useLocation();
    const isHome = location.pathname === "/";

    const [isOpenHeaderMenu, setIsOpenHeaderMenu] = useState(false);

    const toggleHeaderMenu = () => {
        setIsOpenHeaderMenu(!isOpenHeaderMenu);
    };

    const headerNavItem = [
        { href: "#problem", text: "就活の悩み" },
        { href: "#feature", text: "特徴" },
        { href: "#service", text: "サービス内容" },
        { href: "#flow", text: "ご利用の流れ" },
        { href: "#interview", text: "インタビュー" },
        { href: "#faq", text: "よくある質問" },
    ];

    return (
        <header className="l-header" ref={headerRef}>
            <h1 className="l-header-title">
                <Link className="l-header-logo" to="/">
                    Career Center
                </Link>
            </h1>

            <div className="l-header-button-wrap">
                <Link
                    className="l-header-button l-header-button--reserve u-hide--sp"
                    to="/reservations"
                >
                    相談の予約をする
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                </Link>

                <a
                    className="l-header-button l-header-button--jobs u-hide--sp"
                    href="https://www.tec-scs.jp/"
                    target="_blank"
                >
                    求人情報を見る
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>

                {isHome && (
                    <button
                        type="button"
                        className="l-header-icon"
                        onClick={toggleHeaderMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
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
                    <button
                        type="button"
                        className="l-header-icon"
                        onClick={toggleHeaderMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
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
                        to="/reservations"
                        onClick={toggleHeaderMenu}
                    >
                        相談の予約をする
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
