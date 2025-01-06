import { Button, Img, Text } from "./..";
import React from "react";

export default function UserProfile2({ eventTitle = "NESA DINNER AND AWARDS NIGHT", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-[30px] bg-[#fcf5ed] rounded-[10px]`}
    >
      <Img
        src="images/img_screenshot_20240203_160135.png"
        alt="Image"
        className="h-[278px] w-full rounded-t1-[10px] rounded-tr-[10px] object-cover"
      />
      <div className="mb-[18px] flex flex-col items-start gap-2.5 self-stretch px-5">
        <Text
          size="text4x1"
          as="p"
          className="w-full !font-['Neue_Haas_Grotesk_Text_Pro'] text-[32px] font-normal leading-10"
        >
          {eventTitle}
        </Text>
        <Button size="md" shape="round" className="w-[48px] rounded-[3px] px-3 shadow-[4px_4px_10px_e_#88000819]">
          <img src="images/img_info_indigo_900.svg" />
        </Button>
      </div>
    </div>
  );
}