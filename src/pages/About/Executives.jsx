import React, { useState, useEffect, Suspense } from "react";
import { Img, Heading, Text } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import axios from "axios";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function Executives() {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchExecutives = async () => {
      try {
        const response = await axios.get("https://faculty-backend-55jd.onrender.com/getExecutives");
        setExecutives(response.data); // Assuming response.data is an array of executives
        setLoading(false);
      } catch (err) {
        console.error("Error fetching executives:", err);
        setError("Failed to fetch executives.");
        setLoading(false);
      }
    };

    fetchExecutives();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col">
      {/* Section Header */}
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

      {/* Executives Grid */}
      <div className="flex flex-col items-center">
        <div className="container-sm flex flex-col items-start gap-[34px] md:px-5">
          <Heading
            as="h2"
            className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[48px] font-bold text-[#000000] md:text-[44px] sm:text-[38px]"
          >
            NESA Executives 24/25
          </Heading>
          <div className="grid grid-cols-1 gap-[18px] self-stretch md:grid-cols-4 sm:grid-cols-2">
            <Suspense fallback={<div>Loading feed...</div>}>
              {executives.map((exec, index) => (
                <UserProfile1
                  key={`gridview-${index}`}
                  userName={exec.name}
                  userTitle={exec.title}
                  userLinkdin={exec.linkedin}
                  userImage={exec.imageUrl}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="container-sm md:px-5">
        <Accordion className="mt-20 flex flex-col gap-5">
          {executives.length > 0 && (
            <AccordionItem uuid="executives">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) => (
                      <div className="flex items-center justify-between gap-5 bg-[#fffdfb] px-[60px] py-[38px] shadow-[4px_4px_20px_#0000001a]">
                        <Heading
                          as="h4"
                          className="text-[48px] font-semibold text-[#000000] md:text-[44px] sm:text-[38px]"
                        >
                          NESA Executives 23/24
                        </Heading>
                        <Img
                          src={`${process.env.PUBLIC_URL}/images/Vector Dropdown.svg`}
                          alt="Arrowright"
                          className="h-[24px]"
                        />
                      </div>
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-1 gap-[18px] self-stretch md:grid-cols-4 sm:grid-cols-2">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {executives.map((exec, index) => (
                      <UserProfile1
                        key={`accordion-gridview-${index}`}
                        userName={exec.name}
                        userTitle={exec.position}
                        userLinkdin={exec.linkedin}
                        userImage={exec.image}
                      />
                    ))}
                  </Suspense>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  );
}
