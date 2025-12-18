import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "../pages/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Entry from "../pages/Entry";

const basename = import.meta.env.MODE === "production" ? "/project" : "/";

const Router = () => {
    return (
        <BrowserRouter basename={basename}>
            <Header />

            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/entry" element={<Entry />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default Router;
