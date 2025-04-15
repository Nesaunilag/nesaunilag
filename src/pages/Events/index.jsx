import EventsColumn from "./EventsColumn";
import EventsColumnOne from "./EventsColumnOne";
import React from "react";
import { Heading } from "../../components";
import EventsRow from "./EventsRow";

export default function EventsPage() {
  return (
    <div>
      <div className="w-full bg-[#ffffff]">
        <div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10">
            <div className="flex justify-center bg-[#d97213] py-12 md:py-5">
                <div className="container-sm flex md:px-5">
                    <Heading
                    size="heading3x1"
                    as="h1"
                    className="text-[25px] px-5 font-bold !text-[#ffffff] md:text-[44px] sm:text-[38px]"
                    >
                    EXPLORE OUR EVENTS
                    </Heading>
                </div>
            </div>
          <EventsColumn />
          <EventsColumnOne />
        </div>
      </div>
    </div>
  );
}