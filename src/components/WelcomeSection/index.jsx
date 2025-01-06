import React from 'react';
import { Heading, Text } from "./..";

export default function WelcomeSection({ welcomeText = "WELCOME", discoverText = "Discover the", heartofEconomicsText, thoughtsText = "Thoughts", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center py-[186px] md:py-5 bg-[#ffffff]`}
    >
      <div className="container-sm mt-6 flex flex-col items-center px-14 md:px-5">
        <Text size="text2x1" as="p" className="text-[24px] font-normal md:text-[22px]"> {welcomeText}</Text>
        <div className="mt-5 flex">
          <Heading size="text7x1" as="p" className="text-[76px] font-medium md:text-[48px]"> {discoverText}</Heading>
          <div className="h-[74px] w-[2px] bg-[#000000]" />
        </div>
        <div className="mt-1.5 flex flex-col items-start justify-center">
          <Heading size="text7x1" as="p" className="text-[76px] font-medium md:text-[48px]"> <span className="text-[#000000]">Heart of&nbsp;</span>
          <span className="text-[#d97213]">Economics</span>
          </Heading>
        </div>
        <Heading
          size="text7x1"
          as="p"
          className="ml-[186px] mt-2.5 self-start text-[76px] font-medium md:ml-0 md:text-[48px]"
        >{thoughtsText}</Heading>
      </div>
    </div>
  );
}