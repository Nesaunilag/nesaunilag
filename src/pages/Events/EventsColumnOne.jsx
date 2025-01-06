
import { Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const data = [
  { eventTitle: "NESA DINNER AND AWARDS NIGHT" },
  { eventTitle: "NESA DINNER AND AWARDS NIGHT" },
  { eventTitle: "NESA DINNER AND AWARDS NIGHT" },
];

export default function EventsColumnOne() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col items-start gap-[30px] md:px-5">
        <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">Featured Events</Heading>
        <div className="flex flex-col gap-[22px] self-stretch md:flex-row">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile2 {...d} key={"listnesadinnera" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}