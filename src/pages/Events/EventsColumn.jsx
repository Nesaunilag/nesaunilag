import { Heading, Text } from "../../components";
import ExpeditionConference from "../../components/ExpeditionConference";
import React from "react";

export default function Desktop11Column() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col items-start gap-[30px] px-5">
        <Text as="h2" className="text-[20px] font-semibold md:text-[44px] sm:text-[38px]">
          Upcoming Events
        </Text>
        <div className="flex flex-col gap-[30px] self-stretch">
          <ExpeditionConference
            conferenceTitle="NESA SPORT FESTIVAL"
            conferenceDescription=""
            theme=""
            conferenceImg="/images/Events/sport.jpeg"
            conferenceIG="https://instagram.com/expedition"
          />

          <ExpeditionConference
            conferenceTitle="NESA ECONOMIC DISCOURSE"
            conferenceDescription="Where thought leaders converge to shape tomorrow’s economics."
            theme=""
            conferenceImg="/images/Events/ned.png"
            conferenceIG="https://instagram.com/nesaed"
          />
        </div>
      </div>
    </div>
  );
}
