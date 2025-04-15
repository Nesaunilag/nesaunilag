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
      // backend data for executives



  // const [executives, setExecutives] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch data from the backend
  //   const fetchExecutives = async () => {
  //     try {
  //       const response = await axios.get("https://faculty-backend-55jd.onrender.com/getExecutives");
  //       setExecutives(response.data); // Assuming response.data is an array of executives
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("Error fetching executives:", err);
  //       setError("Failed to fetch executives.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchExecutives();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;








    // Static frontend data for executives
    
    const executives = [
      {
        name: "Temidayo Ogunmuyiwa",
        title: "President",
        imageUrl: "/images/Executives/temidayo.jpg",
        linkedin: "https://www.linkedin.com/in/temidayo-ogunmuyiwa-217203233/",
      },
      {
        name: "John Unachukwu",
        title: "Vice President",
        imageUrl: "/images/Executives/john.jpg",
        linkedin: "https://www.linkedin.com/in/john-unachukwu-859a8b256/",
      },
      {
        name: "Chinenyenwa Udenta",
        title: "General Secretary",
        imageUrl: "/images/Executives/gen-sec.jpg",
        linkedin: "https://linkedin.com/in/",
      },
      {
        name: "Onadeji Ariyo",
        title: "Asst. Gen. Secretary",
        imageUrl: "/images/Executives/ariyo.jpg",
        linkedin: "https://www.linkedin.com/in/ariyo-onadeji/",
      },
      {
        name: "Ijimakinwa Oluwatimilehin",
        title: "Financial Secretary",
        imageUrl: "/images/Executives/dre.jpg",
        linkedin: "https://www.linkedin.com/in/oluwatimilehin-ijimakinwa-167636234/",
      },
      {
        name: "Yusuff Luqman",
        title: "Treasurer",
        imageUrl: "/images/Executives/luqman.jpg",
        linkedin: "https://www.linkedin.com/in/luqman-yusuff-8a2446255/",
      },
      {
        name: "Anuoluwapo Adeola Afe",
        title: "Social Secretary",
        imageUrl: "/images/Executives/anu.jpg",
        linkedin: "https://www.linkedin.com/in/anuoluwapo-afe-00b94b1a3/",
      },
      {
        name: "Idris Simisola",
        title: "Asst. Social Secretary",
        imageUrl: "/images/Executives/simi.jpg",
        linkedin: "https://www.linkedin.com/in/",
      },
      {
        name: "Hamzat Naheem",
        title: "Sport Secretary",
        imageUrl: "/images/Executives/naheem.jpg",
        linkedin: "https://www.linkedin.com/in/naheem-hamzat-4337951a2/",
      },
      {
        name: "Ajiboye Deborah Temidire",
        title: "Asst. Sport Secretary",
        imageUrl: "/images/Executives/temidire.jpg",
        linkedin: "https://www.linkedin.com/in/",
      },
      {
        name: "Adalumo Mercy Temitope",
        title: "Public Relations Officer",
        imageUrl: "/images/Executives/mercy.jpg",
        linkedin: "https://www.linkedin.com/in/adalumo-mercy/",
      },
      {
        name: "Abiola Serah Kola-Kareem",
        title: "Asst. Public Relations Officer",
        imageUrl: "/images/Executives/abiola.jpg",
        linkedin: "https://www.linkedin.com/in/abiola-k-501623247/",
      },
      {
        name: "Michael Stacy Ngozi",
        title: "Welfare Secretary",
        imageUrl: "/images/Executives/stacy.jpg",
        linkedin: "https://www.linkedin.com/in/stacy-michael-388052249/",
      },
      {
        name: "Jimoh Nimot Kofoworola",
        title: "Asst. Welfare Secretary",
        imageUrl: "/images/Executives/nimot.jpg",
        linkedin: "https://www.linkedin.com/in/nimot-jimoh-332106276/",
      },
      {
        name: "Adesina Oluwatobiloba",
        title: "Librarian",
        imageUrl: "/images/Executives/tobi.jpg",
        linkedin: "https://www.linkedin.com/in/",
      },
    ];




  return (
    <div className="flex flex-col">
      {/* Section Header */}
      <div className="flex justify-center bg-[#d97213] py-12 md:py-5 gap-1">
        <div className="container-sm flex px-5">
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
          <div className="grid grid-cols-1 gap-[18px] self-stretch md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
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
                <div className="w-[100wv]">
                  <div className="w-[100%]">
                    <img className="w-[100%] lg:w-full" src={`${process.env.PUBLIC_URL}/images/Executives/exco_past_full.png`} alt="Past Executives Image" />
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  );
}
