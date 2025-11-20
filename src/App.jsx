import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Information from './pages/Information';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
