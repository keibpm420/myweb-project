import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type = "Link", children, to, href, className = "" }) => {
    if (type === "Link") {
        return (
            <Link className={className} to={to}>
                {children}
            </Link>
        );
    }

    if (type === "a") {
        return (
            <a
                className={className}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return null;
};

export default Button;
