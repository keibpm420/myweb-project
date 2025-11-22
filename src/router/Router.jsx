import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Entry from '../pages/Entry';
import Information from '../pages/Information';
import Interview from '../pages/Interview';
import News from '../pages/News';
import Privacy from '../pages/Privacy';
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/news" element={<News />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/success" element={<Success />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default Router;
