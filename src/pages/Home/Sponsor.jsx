import React from "react";
import { Component1 } from "../../components/Component1";
import "./style.css";

export default function Sponsor() {
    return (
        <div className="relative w-full min-h-screen sm:bg-[#d97213] h-[724px] flex flex-col items-center justify-center lg:px-0">
            {/* Sponsor Heading */}
            <p className="w-full max-w-lg lg:max-w-2xl text-center lg:text-right font-medium text-white text-4xl lg:text-5xl tracking-normal leading-tight">
                Would you like to sponsor our events?
            </p>

            {/* Contact Button */}
            <div className="mt-8 lg:mt-0 inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#03045e] rounded-full">
                <span className="font-bold text-white text-lg lg:text-2xl">Contact Us</span>
            </div>

            {/* Social Media Icons */}
            <Component1
                className="absolute bottom-8 lg:top-[71px] lg:left-[218px]"
                icBaselineTiktok="https://c.animaapp.com/WzNSGM6X/img/ic-baseline-tiktok-6.svg"
                icOutlineWhatsapp="https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp-6.svg"
                iconoirTwitter="https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter-6.svg"
                jamLinkedin="https://c.animaapp.com/WzNSGM6X/img/jam-linkedin-6.svg"
                mdiInstagram="https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-7.svg"
                property1="default"
                vector="https://c.animaapp.com/WzNSGM6X/img/vector-15-7.svg"
            />
        </div>
    );
}
