import React from "react";
import "./style.css";

const executives = [
  {
    name: "Ogunmuyiwa Temidayo",
    position: "President",
    linkedin: "https://c.animaapp.com/WzNSGM6X/img/bi-linkedin.svg",
  },
  {
    name: "Adeyemi Bukola",
    position: "Vice President",
    linkedin: "https://c.animaapp.com/WzNSGM6X/img/bi-linkedin-1.svg",
  },
  {
    name: "Afolabi Oladimeji",
    position: "Secretary",
    linkedin: "https://c.animaapp.com/WzNSGM6X/img/bi-linkedin-2.svg",
  },
  {
    name: "Chukwudi Emmanuel",
    position: "Treasurer",
    linkedin: "https://c.animaapp.com/WzNSGM6X/img/bi-linkedin-3.svg",
  },
  {
    name: "Nwankwo David",
    position: "Public Relations Officer",
    linkedin: "https://c.animaapp.com/WzNSGM6X/img/bi-linkedin-4.svg",
  },
  {
    name: "John Doe",
    position: "Sport Secretary",
    linkedin: "https://c.animaapp.com/WzNSGM6X/img/bi-linkedin-5.svg",
  },
];

export default function OurExe() {
  return (
    <div className="flex flex-col w-full gap-2.5 px-10 py-9 relative h-auto bg-white overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <div className="text-5xl leading-normal font-medium text-black tracking-0">
          Our Executives
        </div>
        <div className="inline-flex items-center gap-2.5">
          <div className="mt-[-1px] font-normal text-[#d97213] text-xl leading-normal tracking-0">
            View all
          </div>
          <img
            className="w-4 h-4"
            alt="Vector"
            src="https://c.animaapp.com/WzNSGM6X/img/vector-118.svg"
          />
        </div>
      </div>

      <div className="relative overflow-hidden h-auto">
        <div className="flex animate-slide">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="w-[50vw] md:w-[20vw] relative rounded-[30px] bg-seashell h-[482px] overflow-hidden shrink-0 text-center text-[24px] text-black font-open-sans"
            >
              <div className="absolute w-[350px] h-[350px] top-0 left-0 bg-[#d9d9d9]" />
              <div className="absolute top-[364px] left-[30px] font-semibold text-black text-2xl text-center leading-normal">
                {exec.name}
              </div>
              <div className="absolute top-[399px] left-[30px] font-normal text-black text-xl text-center leading-normal">
                {exec.position}
              </div>
              <img
                className="top-[432px] left-[30px] absolute w-7 h-7"
                alt="LinkedIn"
                src={exec.linkedin}
              />
            </div>
          ))}
         
        </div>
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none shadow-fade" />
      </div>
    </div>
  );
}
