import { Img, Heading, Text } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { useState, useEffect, Suspense } from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    pastexecutives: "NESA Executives 23/24",
  },
];

const executives = [
    {
      executives: "NESA Executives 23/24",
    },
  ];
  

const data = [
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com" },
    { userName: "Jane Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg"},
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" },
    { userName: "John Doe", userTitle: "President", userLinkdin: "www.google.com", userImage: "https://nesaunilag.com/img/staf&stud/President.jpg" }
];


export default function Executives() {
  return (
    <div className="flex flex-col">

        <div className="flex justify-center bg-[#d97213] py-12 md:py-5 gap-1">
                <div className="container-sm flex md:px-5">
                <Heading
                    size="heading3xl"
                    as="h1"
                    className="font-bold text-[#ffff] md:text-[44px] sm:text-[38px]"
                >
                    EXECUTIVES
                </Heading>
                </div>
        </div>

            <div className="flex flex-col items-center">
                <div className="container-sm flex flex-col items-start gap-[34px] md:px-5">
                <Heading
                as="h2"
                className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[48px] font-bold text-[#000000] md:text-[44px] sm:text-[38px]">
                {executives.map((exec, index) => (
                  <span key={index}>{exec.executives}</span>
                ))}
                </Heading>
                <div className="grid grid-cols-1 gap-[18px] self-stretch md:grid-cols-4 sm:grid-cols-2">
                <Suspense fallback={<div>Loading feed...</div>}> {data.map((d, index) => (
                <UserProfile1 {...d} key={"gridview" + index} />
                ))}
                </Suspense>
                </div>
                </div>
            </div>


      <div className="container-sm md:px-5">
        <div>


          {/* Accordion Section */}
          <Accordion className="mt-20 flex flex-col gap-5">
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`accordion-${i}`}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <div className="flex items-center justify-between gap-5 bg-[#fffdfb] px-[60px] py-[38px] shadow-[4px_4px_20px_#0000001a]">
                          <Heading
                            as="h4"
                            className="text-[48px] font-semibold text-[#000000] md:text-[44px] sm:text-[38px]"
                          >
                            {d.pastexecutives}
                          </Heading>
                          <Img src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`} alt="Arrowright" className="h-[24px]" />
                        </div>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>



                <div className="grid grid-cols-1 gap-[18px] self-stretch md:grid-cols-4 sm:grid-cols-2">
            <Suspense fallback={<div>Loading feed...</div>}> {data.map((d, index) => (
            <UserProfile1 {...d} key={"gridview" + index} />
            ))}
            </Suspense>
            </div>




                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
