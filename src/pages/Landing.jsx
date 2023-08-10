import React, { useEffect } from "react";
import { Address, Content, EventBanner, Footer, Navbar } from "../components";

function Landing() {

    useEffect(() => {
        const introSection = document.getElementById("welcome");
        introSection.style.opacity = 0;
        setTimeout(() => {
            introSection.style.transition = "opacity 1s";
            introSection.classList.add("slide-in");
            introSection.style.opacity = 1;
        }, 1000);

    }, []);

    return (
        <div className="flex flex-col items-center text-white">
            <Navbar />

            <EventBanner />
            
            <Address />

            <div className="my-5"></div>

            <Content />

            <Footer />
        </div>
    )
}

export default Landing;