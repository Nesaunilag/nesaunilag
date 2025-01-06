import { Heading } from "../../components";
import React from "react";

export default function EventsRow() {
  return (
    <div className="flex justify-center bg-[#d97213] py-12 md:py-5">
      <div className="container-sm flex md:px-5">
        <Heading
          size="heading3x1"
          as="h1"
          className="text-[48px] font-bold !text-[#ffffff] md:text-[44px] sm:text-[38px]"
        >
          EXPLORE OUR EVENTS
        </Heading>
      </div>
    </div>
  );
}

