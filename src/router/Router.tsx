import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "../pages/Top";
import Reservations from "../pages/Reservations";
import Admin from "../pages/Admin";
import Job from "../pages/Job";
import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import JobDetail from "../pages/JobDetail";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Top />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/job/:id" element={<JobDetail />} />
                </Route>

                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
