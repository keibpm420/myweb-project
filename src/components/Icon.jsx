import React from "react";

const Icon = ({ className = "", type = "span", onClick }) => {
    if (type === "span") {
        return <span className={className}></span>;
    }

    if (type === "button") {
        return <button className={className} onClick={onClick}></button>;
    }

    return null;
};

export default Icon;
