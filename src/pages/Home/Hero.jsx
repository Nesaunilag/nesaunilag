import React, { useEffect } from "react";
import { Text, Button, Heading, Img } from "../../components";
import "./style.css"
import { Frame } from "../../components/Frame";
import { Frame475 } from "../../components/Frame475";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import WelcomeSection from "../../components/WelcomeSection";



export default function Hero () {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  
    return (
        <div className="w-full bg-white h-full">
          <div className="relative h-[720px] bg-[#fffbf6] overflow-hidden">
            <div className="">
              <div className="">
                <div data-aos="fade-right">
                <Frame className="hidden xl:block xl:absolute xl:rotate-[-20.00deg] xl:left-[47px] xl:top-[228px]" property1="default" />
                </div>
                
                <div className="flex justify-center min-h-screen">
                  <div className="xl:w-[50%] mx-auto">
                    <p className="[font-family:'Neue_Haas_Grotesk_Text_Pro-Medium',Helvetica] font-medium text-transparent text-[59px] xl:text-[76px] text-center tracking-[0] leading-[normal]" data-aos="fade-up">
                      <span className="font-thin text-black text-[22px] leading-[normal] [font-family:'Open_Sans',Helvetica] tracking-[0]">
                        WELCOME <br />
                      </span>
                      <span className="text-black">
                        Discover the <br />
                        Heart of{" "}
                      </span>
                      <span className="text-[#d97213]">Economics</span>
                      <span className="text-black"> Thoughts</span> <br />

                      <button className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px] bg-[#03045e] rounded-[600px]">
                        <a href="" className="mt-[-1.00px] [font-family:'Open_Sans',Helvetica] text-white text-xl text-center tracking-[0] leading-[normal]">
                          Explore
                        </a>
                      </button>
                    </p>
                    
                  
                  </div>
                </div>

                
                  <div>
                    <PropertyDefaultWrapper
                      className="hidden xl:block xl:absolute xl:rotate-[-6.00deg] xl:left-[105px] xl:top-3"
                      imageClassName="!h-[320px] !rotate-[6.00deg] !-left-3 !w-56 !-top-2.5"
                      img="https://c.animaapp.com/WzNSGM6X/img/ef92a3ef42d2661ca159bfe314a7ca90-1-2@2x.png"
                      property1="default" 
                      data-aos="fade-down"
                    />
                  </div>
              </div>


              <div className="hidden xl:block xl:absolute xl:w-[374px] xl:h-[583px] xl:top-0 xl:left-[1160px]">
                <div data-aos="fade-down">
                <Frame475
                  IMG="https://c.animaapp.com/WzNSGM6X/img/img-0246-2@2x.png"
                  IMGClassName="!h-[290px] !rotate-[-10.00deg] !left-[-21px] !w-[237px] !top-[-15px]"
                  className="!absolute !rotate-[10.00deg] !left-[26px] !top-[18px]"
                  property1="default"
                />
                </div>

                <div className="absolute w-60 h-80 top-[239px] left-[99px] bg-[#03045e] rounded-[20px] rotate-[14.20deg] shadow-[4px_4px_20px_#0000001a]" data-aos="slide-left" >
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
              
            </div>
          </div>
        </div>
    )
}