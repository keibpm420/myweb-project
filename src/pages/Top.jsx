import React from "react";
import Mv from "../components/Top/Mv";
import Problem from "../components/Top/Problem";
import Feature from "../components/Top/Feature";
import Service from "../components/Top/Service";
import Flow from "../components/Top/Flow";
import Cta from "../components/Top/Cta";
import Faq from "../components/Top/Faq";
import Voice from "../components/Top/Voice";

const Top = () => {
    return (
        <main className="top">
            <Mv />

            <Problem />

            <Feature />

            <Service />

            <Flow />

            <Voice />

            <Faq />

            <Cta />
        </main>
    );
};

export default Top;
