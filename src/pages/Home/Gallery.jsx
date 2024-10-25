import React from "react";
import "./style.css"

export default function Gallery () {
    return (
        <div className="relative h-full w-full my-14 bg-white">
          <div className="relative h-[724px] bg-[url(https://c.animaapp.com/WzNSGM6X/img/-lay0742-1.png)] bg-cover bg-[50%_50%]">
            <div className="flex flex-col items-center gap-6 justify-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Text_Pro-75Bold',Helvetica] font-bold text-white text-8xl text-center tracking-[0] leading-[normal]">
                  NESAITES IN VIEW
                </div>
                <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-8">
                  Embark on a visual journey that transcends word. Our photo gallery captures moments in frozen time that
                  defines our academic journey.
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px] bg-[#d97213] rounded-[1000px]">
                <div className="mt-[-1.00px] font-bold text-white text-2xl leading-8 whitespace-nowrap relative w-fit [font-family:'Open_Sans',Helvetica] text-center tracking-[0]">
                  View Galley
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}