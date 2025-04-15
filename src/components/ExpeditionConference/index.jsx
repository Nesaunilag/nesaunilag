import React from "react";
import { Text, Img, Button } from "./.."; // Adjust path as needed

export default function ExpeditionConference({
  conferenceTitle = "THE EXPEDITION CONFERENCE 9.0",
  conferenceDescription = "We've done it before and we're more set than ever to do it again. The Expedition Conference (TEC 9.0) is here with this exceptional theme:",
  theme = "IGNITING POTENTIALS AND SEIZING FUTURE OPPORTUNITIES",
  conferenceImg = "/images/img_screenshot_2023.png",
  conferenceIG = "#",
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center self-stretch gap-5">
      <div className="flex bg-[#d9d9d9] rounded-[10px] overflow-hidden">
        <Img
          src={conferenceImg}
          alt={conferenceTitle}
          className="h-[400px] w-full rounded-[10px] object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-start justify-center gap-[18px] md:self-stretch">
        <Text
          size="text4xl"
          as="p"
          className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[32px] font-medium md:text-[30px] sm:text-[28px]"
        >
          {conferenceTitle}
        </Text>
        <Text
          size="text2xl"
          as="p"
          className="w-full text-[24px] font-normal leading-8 md:text-[22px]"
        >
          <span>{conferenceDescription}</span> <br />
          <span className="font-bold">{theme}</span>
        </Text>
        <a href={conferenceIG} target="_blank" rel="noopener noreferrer">
          <Button
            size="md"
            shape="round"
            className="w-[48px] rounded-[3px] px-3 shadow-[4px_4px_10px_0_#00000019]"
          >
            <Img src="images/svg/instagram.svg" alt="Instagram" />
          </Button>
        </a>
      </div>
    </div>
  );
}
