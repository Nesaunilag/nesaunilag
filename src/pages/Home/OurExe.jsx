import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";
import "./style.css";

export default function OurExe() {
   // Static frontend data for executives
   const executives = [
    {
      name: "Temidayo Ogunmuyiwa",
      title: "President",
      imageUrl: "/images/Executives/temidayo.jpg",
      linkedin: "https://www.linkedin.com/in/temidayo-ogunmuyiwa-217203233/",
    },
    {
      name: "John Unachukwu",
      title: "Vice President",
      imageUrl: "/images/Executives/john.jpg",
      linkedin: "https://www.linkedin.com/in/john-unachukwu-859a8b256/",
    },
    {
      name: "Chinenyenwa Udenta",
      title: "General Secretary",
      imageUrl: "/images/Executives/gen-sec.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Onadeji Ariyo",
      title: "Asst. Gen. Secretary",
      imageUrl: "/images/Executives/ariyo.jpg",
      linkedin: "https://www.linkedin.com/in/ariyo-onadeji/",
    },
    {
      name: "Ijimakinwa Oluwatimilehin",
      title: "Financial Secretary",
      imageUrl: "/images/Executives/dre.jpg",
      linkedin: "https://www.linkedin.com/in/oluwatimilehin-ijimakinwa-167636234/",
    },
    {
      name: "Yusuff Luqman",
      title: "Treasurer",
      imageUrl: "/images/Executives/luqman.jpg",
      linkedin: "https://www.linkedin.com/in/luqman-yusuff-8a2446255/",
    },
    {
      name: "Anuoluwapo Adeola Afe",
      title: "Social Secretary",
      imageUrl: "/images/Executives/anu.jpg",
      linkedin: "https://www.linkedin.com/in/anuoluwapo-afe-00b94b1a3/",
    },
    {
      name: "Idris Simisola",
      title: "Asst. Social Secretary",
      imageUrl: "/images/Executives/simi.jpg",
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Hamzat Naheem",
      title: "Sport Secretary",
      imageUrl: "/images/Executives/naheem.jpg",
      linkedin: "https://www.linkedin.com/in/naheem-hamzat-4337951a2/",
    },
    {
      name: "Ajiboye Deborah Temidire",
      title: "Asst. Sport Secretary",
      imageUrl: "/images/Executives/temidire.jpg",
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Adalumo Mercy Temitope",
      title: "Public Relations Officer",
      imageUrl: "/images/Executives/mercy.jpg",
      linkedin: "https://www.linkedin.com/in/adalumo-mercy/",
    },
    {
      name: "Abiola Serah Kola-Kareem",
      title: "Asst. Public Relations Officer",
      imageUrl: "/images/Executives/abiola.jpg",
      linkedin: "https://www.linkedin.com/in/abiola-k-501623247/",
    },
    {
      name: "Michael Stacy Ngozi",
      title: "Welfare Secretary",
      imageUrl: "/images/Executives/stacy.jpg",
      linkedin: "https://www.linkedin.com/in/stacy-michael-388052249/",
    },
    {
      name: "Jimoh Nimot Kofoworola",
      title: "Asst. Welfare Secretary",
      imageUrl: "/images/Executives/nimot.jpg",
      linkedin: "https://www.linkedin.com/in/nimot-jimoh-332106276/",
    },
    {
      name: "Adesina Oluwatobiloba",
      title: "Librarian",
      imageUrl: "/images/Executives/tobii.jpg",
      linkedin: "https://www.linkedin.com/in/",
    },
  ];

  const scrollContainerRef = useRef(null);


  useEffect(() => {
    if (executives.length > 0) {
      const container = scrollContainerRef.current;

      const handleAnimationEnd = () => {
        // Move the first child to the end of the container
        const firstChild = container.firstElementChild;
        container.appendChild(firstChild);

        // Reset the animation to maintain seamless loop
        container.style.animation = "none";
        requestAnimationFrame(() => {
          container.style.animation = "";
        });
      };

      // Attach the animationend event
      container.addEventListener("animationend", handleAnimationEnd);

      return () => {
        container.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [executives]);

  return (
    <div className="w-full relative bg-white h-[742px] overflow-hidden text-center text-[48px] text-black font-open-sans">
      <div className="flex flex-row justify-between py-16 px-8">
        <div className="items-center justify-center text-left text-[24px] lg:text-[24px] xl:text-[48px] font-neue-haas-grotesk-text-pro">Our Executives</div>
        <div className="flex flex-row items-center justify-start gap-2.5 text-xl text-chocolate">
            <Link to="/executives" className="font-sans text-chocolate text-[24px]">View all</Link>
            <img className="w-1.5 relative h-3" alt="" src="Vector.svg" />
          </div>
      </div>
        <div className="absolute top-[172px] flex flex-row items-center justify-start gap-5 text-5xl">
          <div className="scroll-container">
                <div className="scroll-content" ref={scrollContainerRef}>
                  {executives.map((exec, index) => (
                    <div
                      key={index}
                      className="w-[70vw] md:w-[70vw] lg:w-[25vw] relative rounded-[30px] bg-[#fcf5ed] gap-28 bg-seashell h-[502px] overflow-hidden shrink-0 text-center text-[24px] text-black font-open-sans"
                    >
                      <div
                        className="w-full h-[350px] top-0 left-0 bg-[#d9d9d9] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${exec.imageUrl})` }}
                      />
                      <div className="absolute top-[364px] left-[30px] font-semibold text-black text-[18px] lg:text-[24px] text-center leading-normal">
                        {exec.name}
                      </div>
                      <div className="absolute top-[399px] left-[30px] font-normal text-black text-[16px] lg:text-[20px] text-center leading-normal">
                        {exec.title}
                      </div>
                      <a href={exec.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                          className="top-[442px] left-[30px] absolute w-4 h-4 lg:w-7 lg:h-7"
                          alt="LinkedIn"
                          src="https://c.animaapp.com/WzNSGM6X/img/bi-linkedin.svg"
                        />
                      </a>
                    </div>
                  ))}
                </div>
          </div>
        </div>
        
        <div className="hidden xl:block absolute top-[172px] left-[0px] [background:linear-gradient(270deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.8))] rounded-[30px] w-[140px] h-[482px]" />
        <div className="hidden xl:block absolute top-[172px] right-[0px] [background:linear-gradient(270deg,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0)_100%)] w-[140px] h-[482px]" />
    </div>
  );
}
