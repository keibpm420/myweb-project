import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "../pages/Top";
import Reservations from "../pages/Reservations";
import Admin from "../pages/Admin";
import Test from "../pages/Test";
import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Top />} />
                    <Route path="/reservations" element={<Reservations />} />
                </Route>

                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/test" element={<Test />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
