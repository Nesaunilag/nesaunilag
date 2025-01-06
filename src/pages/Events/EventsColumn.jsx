import { Heading } from "../../components";
// import ExpeditionConference from "../../components/ExpeditionConference";
import React from "react";

export default function Desktop11Column() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col items-start gap-[30px] md:px-5">
        <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
          Upcoming Events
        </Heading>
        <div className="flex flex-col gap-[30px] self-stretch">
          {/* <ExpeditionConference />
          <ExpeditionConference conferenceTitle="THE EXPEDITION CONFERENCE 9.0" /> */}
        </div>
      </div>
    </div>
  );
}