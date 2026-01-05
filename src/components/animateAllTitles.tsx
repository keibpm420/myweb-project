import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateAllTitles = () => {
    const allTitleWraps = document.querySelectorAll(".c-title-wrap");

    allTitleWraps.forEach((wrap) => {
        const children = wrap.children;

        gsap.fromTo(
            children,
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.6,
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 80%",
                },
            }
        );
    });
};

export default function ScrollAnimations() {
    useEffect(() => {
        animateAllTitles();
    }, []);

    return null;
}
