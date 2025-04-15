import React from "react";
import { Heading, Text, Img } from "../../components";
import AboutUs from "./AboutUs";
import "./style.css"

export default function About() {
  return (
    <div>

      <div className="flex justify-center bg-[#d97213] py-12 md:py-5">
        <div className="container-sm flex md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="font-bold text-[#ffff] px-5 lg:px-0 text-[25px] md:text-[44px] sm:text-[38px]"
          >
            GET TO KNOW US
          </Heading>
        </div>
      </div>


      <div className="flex justify-center">
        <div className="container-sm flex justify-center mt-16">
            <div className="flex h-[402px] w-full flex-col items-center justify-center gap-[42px] rounded-[10px] bg-[#fcf5ed] bg-[url(/public/images/background.png)] bg-cover bg-no-repeat px-14 py-16 md:h-auto md:py-10"> 
                <div className="">
                    <Img src={`${process.env.PUBLIC_URL}/images/nesasLogo.png`} alt="Imageten" className="h-[148px] w-full object-cover md:h-auto" />
                </div>
                <Text
                    size="text4x1"
                    as="p"
                    className="font-bold text-[#d97213] md:text-[30px] sm:text-[28px]">
                    NIGERIAN ECONOMICS STUDENT ASSOCIATION, UNILAG
                </Text>
            </div>
        </div>
      </div>


       <AboutUs />

    </div>
  );
}
