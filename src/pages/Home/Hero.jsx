import React from "react";
import "./style.css"
import { Frame } from "../../components/Frame";
import { Frame475 } from "../../components/Frame475";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";

export default function Hero () {
    return (
        <div className="w-full bg-white h-full">
          <div className="relative h-[720px] bg-[#fffbf6] overflow-hidden">
            <div className="">
              <div className="">
                <Frame className="!absolute !rotate-[-20.00deg] !left-[47px] !top-[228px]" property1="default" />
                <p className="absolute w-[839px] top-[138px] left-[339px] [font-family:'Neue_Haas_Grotesk_Text_Pro-Medium',Helvetica] font-medium text-transparent text-[76px] text-center tracking-[0] leading-[normal]">
                  <span className="text-black">
                    Discover the <br />
                    Heart of{" "}
                  </span>
                  <span className="text-[#d97213]">Economics</span>
                  <span className="text-black"> Thoughts</span>
                </p>
                <PropertyDefaultWrapper
                  className="!absolute !rotate-[-6.00deg] !left-[105px] !top-3"
                  imageClassName="!h-[320px] !rotate-[6.00deg] !-left-3 !w-56 !-top-2.5"
                  img="https://c.animaapp.com/WzNSGM6X/img/ef92a3ef42d2661ca159bfe314a7ca90-1-2@2x.png"
                  property1="default"
                />
              </div>
              <div className="absolute w-[374px] h-[583px] top-0 left-[1160px]">
                <Frame475
                  IMG="https://c.animaapp.com/WzNSGM6X/img/img-0246-2@2x.png"
                  IMGClassName="!h-[290px] !rotate-[-10.00deg] !left-[-21px] !w-[237px] !top-[-15px]"
                  className="!absolute !rotate-[10.00deg] !left-[26px] !top-[18px]"
                  property1="default"
                />
                <div className="absolute w-60 h-80 top-[239px] left-[99px] bg-[#03045e] rounded-[20px] rotate-[14.20deg] shadow-[4px_4px_20px_#0000001a]">
                  <div className="relative w-[214px] h-[242px] top-8 -left-px">
                    <div className="absolute w-[214px] h-[233px] top-0 left-0">
                      <img
                        className="absolute w-[157px] h-[201px] top-4 left-[22px] rotate-[-14.20deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/WzNSGM6X/img/vector-17-8.svg"
                      />
                      <img
                        className="absolute w-[98px] h-[164px] top-7 left-[70px] rotate-[-14.20deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/WzNSGM6X/img/vector-18-4.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[120px] top-[71px] left-[53px] rotate-[-14.20deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/WzNSGM6X/img/vector-19-6.svg"
                      />
                      <img
                        className="absolute w-[103px] h-[78px] top-[122px] left-[47px] rotate-[-14.20deg]"
                        alt="Vector"
                        src="https://c.animaapp.com/WzNSGM6X/img/vector-20-3.svg"
                      />
                      <img
                        className="absolute w-[11px] h-[30px] top-[94px] left-[23px] rotate-[-14.20deg] object-cover"
                        alt="Arrow"
                        src="https://c.animaapp.com/WzNSGM6X/img/arrow-4-8.svg"
                      />
                      <img
                        className="absolute w-[30px] h-[11px] top-[195px] left-[105px] rotate-[-14.20deg] object-cover"
                        alt="Arrow"
                        src="https://c.animaapp.com/WzNSGM6X/img/arrow-4-9.svg"
                      />
                      <div className="absolute w-[5px] h-[5px] top-[77px] left-[86px] bg-white rounded-[2.5px]" />
                      <div className="absolute w-[5px] h-[5px] top-[134px] left-[142px] bg-white rounded-[2.5px]" />
                      <div className="absolute top-[11px] left-[27px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[normal]">
                        Price
                      </div>
                      <div className="absolute top-[62px] left-[89px] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[normal]">
                        A
                      </div>
                      <div className="absolute top-[119px] left-[145px] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[normal]">
                        B
                      </div>
                      <div className="top-[196px] left-[173px] text-white text-[10px] text-center absolute [font-family:'Open_Sans',Helvetica] font-normal tracking-[0] leading-[normal]">
                        Quantity
                      </div>
                    </div>
                    <div className="top-[220px] left-[58px] text-white absolute [font-family:'Open_Sans',Helvetica] font-semibold text-base text-center tracking-[0] leading-[normal]">
                      DEMAND CURVE
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px] absolute top-[463px] left-[664px] bg-[#03045e] rounded-[600px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Explore
                </div>
              </div>
              <div className="absolute top-[103px] left-[700px] font-normal text-black text-2xl text-center leading-[normal] [font-family:'Open_Sans',Helvetica] tracking-[0]">
                WELCOME
              </div>
            </div>
          </div>
        </div>
    )
}