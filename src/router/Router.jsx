import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "../pages/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Router = () => {
    const basename = "/";

    return (
        <BrowserRouter basename={basename}>
            <Header />

            <Routes>
                <Route path="/" element={<Top />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default Router;
