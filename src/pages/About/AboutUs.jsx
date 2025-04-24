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
    <div className="flex flex-col items-center px-2 md:px-0">
      <div className="container-sm px-5 md:px-5">
        {/* Who we are Section */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-8  mt-16">
            <Heading
              as="h3"
              className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[48px] font-medium text-[#000000] md:text-[44px] sm:text-[38px]"
            >
              Who we are?
            </Heading>
            <Img
              src={`${process.env.PUBLIC_URL}/images/Line.png`}
              alt="Imageten"
              className="w-full md:w-[70%] object-cover md:h-auto"
            />
            {/* <div className="mb-3.5 h-[10px] flex-1 self-end bg-[#03045e] md:self-stretch sm:self-auto" /> */}
          </div>

          <Text
            as="p"
            className="mt-2.5 text-[14px] lg:text-[20px] font-normal leading-[27px] text-[#000000]"
          >
            <>
              The Nigerian Economics Students Association (NESA) University of
              Lagos Chapter has a rich history spanning over a decade. As an
              affiliate of the esteemed National Association of Nigerian
              Students (NANS), NESA focuses specifically on students
              specializing in Economics across various tertiary institutions
              within the country.
              <br />
              <br />
              NESA's primary objective is to empower its members by equipping
              undergraduates in Economics with essential knowledge, valuable
              resources and practical skills that complement their academic
              pursuits within the university. The association is dedicated to
              nurturing the potential of Economics students in guiding them
              towards becoming adaptable and proficient graduates in the field.
              <br />
              <br />
              Through a diverse range of initiatives such as seminars, symposia,
              lectures, NESA facilitates the personal, academic and professional
              growth of its members. At the core of its mission lies the motto
              "Nulli Secundus" which translates to "Second to none." This motto
              underscores NESA's unwavering commitment to upholding the highest
              standards of excellence in all its endeavors.
              <br />
              <br />
              The profound impact of NESA is evident across various sectors
              including industry, politics and the economy. Its alumni
              consistently secure prominent positions and actively contribute to
              making positive changes within their respective domains. By
              providing a platform for holistic development, NESA UNILAG stands
              as a catalyst for producing well-rounded Economics graduates who
              are primed to make substantial contributions to society.
            </>
          </Text>

          {/* Mission Section */}
          <Text
            as="p"
            className="mt-7 text-[14px] lg:text-[20px] font-normal leading-8 text-[#4a4a4a]"
          >
            <span className="font-Neue_Haas_Grotesk_Text_Pro text-[32px] font-bold text-[#000000]">
              MISSION
            </span>
            <br />
            <span className="font-Open Sans text-[#000000]">
              <>
                a. Providing opportunities for leadership, decision making and
                skill training.
                <br />
                b. Raising awareness of young people to the needs of others
                locally, nationally and globally and encouraging them to engage
                in activities and projects in which they can make a difference.
                <br />
                c. Being sensitive to the needs and aspirations of young people
                of varying backgrounds, differing abilities and stages of
                development and providing support and advice
                <br />
                d. Ensuring the safety of young people through the
                implementation of suitable procedures for the election, training
                and supervision of leaders.
                <br />
                e. Equipping leaders through provision of high quality training
                and resources. extension.
                <br />
                f. Providing a network of professional staff to support
                voluntary leaders.
                <br />
                g. Creating opportunities to develop partnerships with other
                appropriate associations and agencies
                <br />
                h. To empower students with essential tools to thrive in their
                respective career paths.
                <br />
              </>
            </span>
          </Text>
          <Text
            as="p"
            className="mt-7 text-[14px] lg:text-[20px] font-normal leading-8 text-[#4a4a4a]"
          >
            <span className="font-Neue_Haas_Grotesk_Text_Pro text-[32px] font-bold text-[#000000] mt-8">
              VISION
            </span>
            <br />
            <span className="font-['Open Sans'] text-[#000000]">
              <>
                a. Promote team spirit, moral, social, academic, and
                intellectual interests of its members.
                <br />
                b. Cherish, uphold and further the highest traditions of the
                Department of Economics and the University of Lagos.
                <br />
                c. Provide its members with a healthy academic environment
                suitable for the pursuit of well-rounded education in order to
                develop responsible citizens.
                <br />
                d. Protect the general welfare and interests of the students.
                <br />
                e. promote and foster friendly relations with other student
                bodies within and outside Nigeria whose aims are acceptable to
                NESA UNILAG.
                <br />
                f. To promote discussions relevant to teaching, research and
                extension on all matters of interest to members of the
                association and the society at large via its NESA.
                <br />
                g. To develop the student community through the provision of
                entertainment, media, social and other services, and support for
                a wide variety of student led cultural, recreational and
                sporting groups.
                <br />
                h. Provide Forums such as NESA Economic Discourse, NESA
                Expedition Conference, NESA Career Fair etc. for the purpose of
                sound economic, scholastic and intellectual deliberations
                towards uplifting the soundness of minds.
                <br />
                g. To develop the student community through the provision of
                entertainment, media, social and other services, and support for
                a wide variety of student led cultural, recreational and
                sporting groups.
              </>
            </span>
          </Text>
          <Text as="p" className="mt-7 text-[20px] leading-8">
            The association aims to do this through an open and democratic
            structure, effective communication with members, with emphasis on
            continual improvement to all services. Fulfillment of these
            objectives will thereby enhance the reputation of the institution
            with prospective students, potential employers and the local
            community.
          </Text>
          {/* History Section */}
          <div className="">
            <div className="flex flex-col md:flex-row items-center gap-4 mt-16">
              <Heading
                as="h3"
                className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[48px] font-medium text-[#000000] md:text-[44px] sm:text-[38px]"
              >
                History
              </Heading>
              <Img
                src={`${process.env.PUBLIC_URL}/images/Line.png`}
                alt="Imageten"
                className="w-full object-cover md:h-auto"
              />
              {/* <div className="mb-3.5 h-[10px] flex-1 self-end bg-[#03045e] md:self-stretch sm:self-auto" /> */}
            </div>
            <Text
              as="p"
              className="mt-1.5 text-[14px] lg:text-[20px] font-normal leading-[27px] text-[#000000]"
            >
              <>
                The Nigerian Economics Students Association (NESA) University of
                Lagos Chapter has a rich history spanning over a decade. As an
                affiliate of the esteemed National Association of Nigerian
                Students (NANS), NESA focuses specifically on students
                specializing in Economics across various tertiary institutions
                within the country.
              </>
              <br />
              <br />
              <>
                NESA's primary objective is to empower its members by equipping
                undergraduates in Economics with essential knowledge, valuable
                resources and practical skills that complement their academic
                pursuits within the university. The association is dedicated to
                nurturing the potential of Economics students in guiding them
                towards becoming adaptable and proficient graduates in the
                field.
              </>
              <br />
              <br />
              <>
                Through a diverse range of initiatives such as seminars,
                symposia, lectures, NESA facilitates the personal, academic and
                professional growth of its members. At the core of its mission
                lies the motto "Nulli Secundus" which translates to "second to
                none." This motto underscores NESA's unwavering commitment to
                upholding the highest standards of excellence in all its
                endeavors.
              </>
              <br />
              <br />
              <>
                The profound impact of NESA is evident across various sectors
                including industry, politics and the economy. Its alumni
                consistently secure prominent positions and actively contribute
                to making positive changes within their respective domains. By
                providing a platform for holistic development, NESA UNILAG
                stands as a catalyst for producing well-rounded Economics
                graduates who are primed to make substantial contributions to
                society.
              </>
            </Text>
          </div>

          <div className="my-[5rem]">
            <div className="flex flex-col gap-5 mb-8">
              {accordionData
                .slice(0, accordionData.length / 2)
                .map((data, index) => (
                  <Link
                    to="/executives"
                    key={index}
                    className="flex items-center justify-between gap-5 bg-[#fffdfb] px-[30px] lg:px-[60px] py-[38px] shadow-[4px_4px_20px_#0000001a]"
                  >
                    <Text
                      as="h4"
                      className="text-[20px] lg:text-[48px] font-semibold text-[#000000]"
                    >
                      {data.executives}
                    </Text>
                    <Img
                      src={`${process.env.PUBLIC_URL}/images/right.svg`}
                      alt="Arrowright"
                      className="h-[24px]"
                    />
                  </Link>
                ))}
            </div>

            <div className="flex flex-col gap-5">
              {accordionData
                .slice(accordionData.length / 2)
                .map((data, index) => (
                  <Link to="/alumni">
                    <div
                      key={index}
                      className="flex items-center justify-between gap-5 bg-[#fffdfb] px-[30px] lg:px-[60px] py-[38px] shadow-[4px_4px_20px_#0000001a]"
                    >
                      <Text
                        as="h4"
                        className="text-[20px] lg:text-[48px] font-semibold text-[#000000]"
                      >
                        {data.executives}
                      </Text>

                      <Img
                        src={`${process.env.PUBLIC_URL}/images/right.svg`}
                        alt="Arrowright"
                        className="h-[24px]"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
