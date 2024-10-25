import { Img, Heading, Text } from "../../components";
import { Link } from "react-router-dom"; // Import Link
import React from "react";

const accordionData = [
  {
    executives: "Executives",
  },
  {
    executives: "Notable Alumni",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm md:px-5">
        {/* Who we are Section */}
        <div>
          <div className="mr-1 flex items-center justify-center gap-5 md:mr-0 md:flex-col">
            <Heading
              as="h2"
              className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[48px] font-medium text-[#000000] md:text-[44px] sm:text-[38px]"
            >
              Who we are?
            </Heading>
            <div className="mb-3.5 h-[10px] flex-1 self-end bg-[#03045e] md:self-stretch sm:self-auto" />
          </div>

          <Text as="p" className="mt-2.5 text-[20px] font-normal leading-[27px] text-[#000000]">
            <>
              The Nigerian Economics Students Association (NESA) University of Lagos Chapter has a rich history spanning
              over a decade. As an affiliate of the esteemed National Association of Nigerian Students (NANS), NESA
              focuses specifically on students specializing in Economics across various tertiary institutions within the
              country.
              <br />
              <br />
              NESA's primary objective is to empower its members by equipping undergraduates in Economics with essential
              knowledge, valuable resources and practical skills that complement their academic pursuits within the
              university. The association is dedicated to nurturing the potential of Economics students in guiding them
              towards becoming adaptable and proficient graduates in the field.
              <br />
              <br />
              Through a diverse range of initiatives such as seminars, symposia, lectures, NESA facilitates the
              personal, academic and professional growth of its members. At the core of its mission lies the motto
              "Nulli Secundus" which translates to "Second to none." This motto underscores NESA's unwavering commitment
              to upholding the highest standards of excellence in all its endeavors.
              <br />
              <br />
              The profound impact of NESA is evident across various sectors including industry, politics and the
              economy. Its alumni consistently secure prominent positions and actively contribute to making positive
              changes within their respective domains. By providing a platform for holistic development, NESA UNILAG
              stands as a catalyst for producing well-rounded Economics graduates who are primed to make substantial
              contributions to society.
            </>
          </Text>

          {/* Mission Section */}
          <Text as="p" className="mt-7 text-[20px] font-normal leading-8 text-[#4a4a4a]">
            <span className="font-Neue_Haas_Grotesk_Text_Pro text-[32px] font-bold text-[#000000]">MISSION</span>
            <br />
            <span className="font-Open Sans text-[#000000]">
              <>
                a. Providing opportunities for leadership, decision making and skill training.
                <br />
                b. Raising awareness of young people to the needs of others locally, nationally and globally and
                encouraging them to engage in activities and projects in which they can make a difference.
                <br />
                c. Ensuring the safety of young people through the implementation of suitable procedures for the
                election, training and supervision of leaders.
                <br />
                d. Equipping leaders through provision of high-quality training and resources.
                <br />
                e. Creating partnerships with other appropriate associations and agencies.
                <br />
              </>
            </span>

            <span className="font-Neue_Haas_Grotesk_Text_Pro text-[32px] font-bold text-[#000000]">VISION</span>
            <br />
            <span className="font-['Open Sans'] text-[#000000]">
              <>
                a. Promote team spirit, moral, social, academic, and intellectual interests of its members.
                <br />
                b. Provide its members with a healthy academic environment.
                <br />
                c. Protect the general welfare and interests of the students.
                <br />
                d. Promote discussions relevant to teaching, research, and extension.
                <br />
              </>
            </span>
          </Text>

          {/* History Section */}
          <div className="mr-1 mt-[38px] flex items-center justify-center gap-[22px] md:mr-0 md:flex-col">
            <Heading
              as="h3"
              className="font-medium text-[#000000] md:text-[44px] sm:text-[38px]"
            >
              History
            </Heading>
            <div className="mb-[18px] h-[10px] flex-1 self-end bg-[#03045e] md:self-stretch sm:self-auto" />
          </div>
          <Text as="p" className="mt-1.5 text-[20px] font-normal leading-[27px] text-[#000000]">
            <>
              NESA's primary objective is to empower its members by equipping undergraduates in Economics with
              essential knowledge, valuable resources, and practical skills...
            </>
          </Text>

        
                        <div className="flex flex-col gap-5">
                          {accordionData.slice(0, accordionData.length / 2).map((data, index) => (
                            <Link to="/executives" key={index} className="flex items-center justify-between gap-5 bg-[#fffdfb] px-[60px] py-[38px] shadow-[4px_4px_20px_#0000001a]">
                              <Heading
                                as="h4"
                                className="text-[48px] font-semibold text-[#000000] md:text-[44px] sm:text-[38px]"
                              >
                                {data.executives}
                              </Heading>
                              <Img src={`${process.env.PUBLIC_URL}/images/right.svg`} alt="Arrowright" className="h-[24px]" />
                            </Link>
                          ))}
                        </div>

                        
                        <div className="flex flex-col gap-5">
                          {accordionData.slice(accordionData.length / 2).map((data, index) => (
                            <Link to="/alumni">
                              <div key={index} className="flex items-center justify-between gap-5 bg-[#fffdfb] px-[60px] py-[38px] shadow-[4px_4px_20px_#0000001a]">
                              <Heading
                                as="h4"
                                className="text-[48px] font-semibold text-[#000000] md:text-[44px] sm:text-[38px]"
                              >
                                {data.executives}
                              </Heading>
                              
                              <Img src={`${process.env.PUBLIC_URL}/images/right.svg`} alt="Arrowright" className="h-[24px]" />
                            </div>
                            </Link>
                          ))}
                        </div>
                      
        </div>
      </div>
    </div>
  );
}
