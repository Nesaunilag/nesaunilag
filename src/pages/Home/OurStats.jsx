import React from "react";
import "./style.css";

export default function OurStats () {
    return (
        <div className="flex flex-col w-full px-9 relative h-[auto]">
          <div className="flex flex-wrap items-center justify-center gap-[48px_0px] py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#d97213]">
            <div className="flex w-[264px] items-center justify-center gap-5 relative">
              <img
                className="relative w-[72px] h-[72px] object-cover"
                alt="Read"
                src="https://c.animaapp.com/WzNSGM6X/img/read-1@2x.png"
              />
              <div className="flex flex-col items-start relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Text_Pro-75Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
                  700+
                </div>
                <div className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                  STUDENTS
                </div>
              </div>
            </div>
            <div className="flex w-[264px] items-center justify-center gap-5 relative">
              <img
                className="relative w-[72px] h-[72px] object-cover"
                alt="Conference"
                src="https://c.animaapp.com/WzNSGM6X/img/conference-1@2x.png"
              />
              <div className="flex flex-col items-start relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Text_Pro-75Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
                  25+
                </div>
                <div className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                  LECTURERS
                </div>
              </div>
            </div>
            <div className="flex w-[264px] items-center justify-center gap-5 relative">
              <img
                className="relative w-[72px] h-[72px] object-cover"
                alt="Homework"
                src="https://c.animaapp.com/WzNSGM6X/img/homework-1@2x.png"
              />
              <div className="flex flex-col items-start relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Text_Pro-75Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
                  30+
                </div>
                <div className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                  COURSES
                </div>
              </div>
            </div>
            <div className="flex w-[223px] items-center justify-center gap-5 relative">
              <img
                className="relative w-[72px] h-[72px] ml-[-1.50px] object-cover"
                alt="Graduated"
                src="https://c.animaapp.com/WzNSGM6X/img/graduated-1@2x.png"
              />
              <div className="flex flex-col w-[134px] items-start relative mr-[-1.50px]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Text_Pro-75Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
                  1000+
                </div>
                <div className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                  ALUMNI
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}