import React from "react";
import "./style.css"

export default function OurMVO () {
    return (

        <div className="flex flex-col w-full gap-2.5 relative bg-[#fffbf6] h-[auto]">
          <div className="flex flex-wrap gap-[20px_20px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col min-w-[300px] items-start gap-2.5 px-10 py-9 relative flex-1 grow bg-[#fs] rounded-[10px] overflow-hidden shadow-[5px_5px_20px_2px_#0000001a]">
              <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[70px] h-[70px] object-cover"
                  alt="Focus"
                  src="https://c.animaapp.com/WzNSGM6X/img/focus--2--1@2x.png"
                />
                <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] text-[26px] leading-8 [font-family:'Neue_Haas_Grotesk_Text_Pro-65Medium',Helvetica] font-medium text-black text-center tracking-[0]">
                    OUR MISSION
                  </div>
                  <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-light text-black text-xl text-center tracking-[0] leading-6">
                    Provide opportunities for leadership, decision making and skill training.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[300px] items-start gap-2.5 px-10 py-9 relative flex-1 grow bg-[#fcf5ed] rounded-[10px] overflow-hidden shadow-[5px_5px_20px_2px_#0000001a]">
              <div className="flex flex-col items-center gap-[26px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-16 h-16 object-cover"
                  alt="Focus"
                  src="https://c.animaapp.com/WzNSGM6X/img/focus--1--1@2x.png"
                />
                <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] text-[26px] leading-8 [font-family:'Neue_Haas_Grotesk_Text_Pro-65Medium',Helvetica] font-medium text-black text-center tracking-[0]">
                    OUR VISION
                  </div>
                  <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-light text-black text-xl text-center tracking-[0] leading-6">
                    Promote team spirit, moral, social, academic and intellectual interests of its members.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[300px] items-start gap-2.5 px-10 py-9 relative flex-1 grow bg-[#fcf5ed] rounded-[10px] overflow-hidden shadow-[5px_5px_20px_2px_#0000001a]">
              <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[70px] h-[70px] object-cover"
                  alt="Goal"
                  src="https://c.animaapp.com/WzNSGM6X/img/goal-1@2x.png"
                />
                <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] text-[26px] leading-8 [font-family:'Neue_Haas_Grotesk_Text_Pro-65Medium',Helvetica] font-medium text-black text-center tracking-[0]">
                    OUR OBJECTIVE
                  </div>
                  <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-light text-black text-xl text-center tracking-[0] leading-6">
                    To empower our members with essential knowledge, valuable resources and practical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}