import Mv from "../components/Top/Mv";
import Problem from "../components/Top/Problem";
import Feature from "../components/Top/Feature";
import Service from "../components/Top/Service";
import Flow from "../components/Top/Flow";
import Faq from "../components/Top/Faq";
import Interview from "../components/Top/Interview";
import ScrollAnimations from "../components/animateAllTitles";
import { Link } from "react-router-dom";

const Top = () => {
    return (
        <main className="top">
            <ScrollAnimations />
            <Mv />

            <Problem />

            <Feature />

            <Service />

            <Flow />

            <Interview />

            <Faq />
            <div className="top-followBtn">
                <ul>
                    <li>
                        <Link className="a" to="/reservations">
                            <span>予約する</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/job">
                            <span>求人を見る</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Top;
