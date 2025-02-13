import React from 'react'
import { Heading, Text } from '../../components';
const Event = () => {
    const data = [
      {
        Image: "images/nesa.png",
        Title: "THE EXPEDITION CONFERENCE 9.O",
        Description:
          "We’ve done it before and were more set than ever to do it again.The Expedition Conference (TEC 9.0) is here with this exceptional theme:",
        topic: "IGNITING POTENTIALS AND SEIZING FUTURE OPPORTUNITIES",
      },
      {
        Image: "images/nesa.png",
        Title: "THE EXPEDITION CONFERENCE 9.O",
        Description:
          "We’ve done it before and were more set than ever to do it again.The Expedition Conference (TEC 9.0) is here with this exceptional theme:",
        topic: "IGNITING POTENTIALS AND SEIZING FUTURE OPPORTUNITIES",
      },
    ];
    const features = [
      {
        Image: "images/gala.png",
        Title: "NESA DINNER AND AWARDS NIGHT",
      },
      {
        Image: "images/gala.png",
        Title: "NESA DINNER AND AWARDS NIGHT",
      },
      {
        Image: "images/gala.png",
        Title: "NESA DINNER AND AWARDS NIGHT",
      },
    ];
  return (
    <main>
      <div className="flex justify-center bg-[#d97213] py-12 md:py-10">
        <div className="container-sm flex">
          <Heading
            size="heading3xl"
            as="h1"
            className="font-bold text-[#ffff] md:text-[44px] sm:text-[38px]"
          >
            EXPLORE OUR EVENTS
          </Heading>
        </div>
      </div>
      <section className="max-w-6xl mx-auto mt-[4rem] ">
        <Heading as="h1" className="font-bold">
          Upcoming Events
        </Heading>
        <section>
          {data.map((d, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-4 mt-6 px-4 md:px-0"
            >
              <img src={d.Image} alt="nesa" className="h-auto w-full md:w-[35%]" />
              <div>
                <Heading className="mb-4" size="heading2xl">
                  {d.Title}
                </Heading>
                <Text className="w-full md:w-[60%]">{d.Description}</Text>
                <Text size="" className="mt-4 font-bold">
                  {d.topic}
                </Text>
                <div className="mt-6">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_328_1855)">
                      <rect
                        x="6"
                        y="6"
                        width="48"
                        height="48"
                        rx="3"
                        fill="white"
                      />
                      <path
                        d="M24.96 18H35.04C38.88 18 42 21.12 42 24.96V35.04C42 36.8859 41.2667 38.6562 39.9615 39.9615C38.6562 41.2667 36.8859 42 35.04 42H24.96C21.12 42 18 38.88 18 35.04V24.96C18 23.1141 18.7333 21.3438 20.0385 20.0385C21.3438 18.7333 23.1141 18 24.96 18ZM24.72 20.4C23.5743 20.4 22.4755 20.8551 21.6653 21.6653C20.8551 22.4755 20.4 23.5743 20.4 24.72V35.28C20.4 37.668 22.332 39.6 24.72 39.6H35.28C36.4257 39.6 37.5245 39.1449 38.3347 38.3347C39.1449 37.5245 39.6 36.4257 39.6 35.28V24.72C39.6 22.332 37.668 20.4 35.28 20.4H24.72ZM36.3 22.2C36.6978 22.2 37.0794 22.358 37.3607 22.6393C37.642 22.9206 37.8 23.3022 37.8 23.7C37.8 24.0978 37.642 24.4794 37.3607 24.7607C37.0794 25.042 36.6978 25.2 36.3 25.2C35.9022 25.2 35.5206 25.042 35.2393 24.7607C34.958 24.4794 34.8 24.0978 34.8 23.7C34.8 23.3022 34.958 22.9206 35.2393 22.6393C35.5206 22.358 35.9022 22.2 36.3 22.2ZM30 24C31.5913 24 33.1174 24.6321 34.2426 25.7574C35.3679 26.8826 36 28.4087 36 30C36 31.5913 35.3679 33.1174 34.2426 34.2426C33.1174 35.3679 31.5913 36 30 36C28.4087 36 26.8826 35.3679 25.7574 34.2426C24.6321 33.1174 24 31.5913 24 30C24 28.4087 24.6321 26.8826 25.7574 25.7574C26.8826 24.6321 28.4087 24 30 24ZM30 26.4C29.0452 26.4 28.1295 26.7793 27.4544 27.4544C26.7793 28.1295 26.4 29.0452 26.4 30C26.4 30.9548 26.7793 31.8705 27.4544 32.5456C28.1295 33.2207 29.0452 33.6 30 33.6C30.9548 33.6 31.8705 33.2207 32.5456 32.5456C33.2207 31.8705 33.6 30.9548 33.6 30C33.6 29.0452 33.2207 28.1295 32.5456 27.4544C31.8705 26.7793 30.9548 26.4 30 26.4Z"
                        fill="#03045E"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_328_1855"
                        x="0"
                        y="0"
                        width="68"
                        height="68"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="4" dy="4" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_328_1855"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_328_1855"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className='my-[5rem] px-4 md:px-0'>
          <Heading as="h1" className="font-bold ">
            Featured Events
          </Heading>
          <div className="flex flex-col md:flex-row gap-4 ">
            {features.map((f, index) => (
              <div
                key={index}
                className="flex flex-col items-center  mt-6"
              >
                <img src={f.Image} alt="nesa" className="h-auto w-full" />
                <div className="bg-[#FCF5ED] px-4 rounded-br-md rounded-bl-md">
                  <Heading className="mb-4" size="heading2xl">
                    {f.Title}
                  </Heading>

                  <div className="mt-6 ">
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_328_1855)">
                        <rect
                          x="6"
                          y="6"
                          width="48"
                          height="48"
                          rx="3"
                          fill="white"
                        />
                        <path
                          d="M24.96 18H35.04C38.88 18 42 21.12 42 24.96V35.04C42 36.8859 41.2667 38.6562 39.9615 39.9615C38.6562 41.2667 36.8859 42 35.04 42H24.96C21.12 42 18 38.88 18 35.04V24.96C18 23.1141 18.7333 21.3438 20.0385 20.0385C21.3438 18.7333 23.1141 18 24.96 18ZM24.72 20.4C23.5743 20.4 22.4755 20.8551 21.6653 21.6653C20.8551 22.4755 20.4 23.5743 20.4 24.72V35.28C20.4 37.668 22.332 39.6 24.72 39.6H35.28C36.4257 39.6 37.5245 39.1449 38.3347 38.3347C39.1449 37.5245 39.6 36.4257 39.6 35.28V24.72C39.6 22.332 37.668 20.4 35.28 20.4H24.72ZM36.3 22.2C36.6978 22.2 37.0794 22.358 37.3607 22.6393C37.642 22.9206 37.8 23.3022 37.8 23.7C37.8 24.0978 37.642 24.4794 37.3607 24.7607C37.0794 25.042 36.6978 25.2 36.3 25.2C35.9022 25.2 35.5206 25.042 35.2393 24.7607C34.958 24.4794 34.8 24.0978 34.8 23.7C34.8 23.3022 34.958 22.9206 35.2393 22.6393C35.5206 22.358 35.9022 22.2 36.3 22.2ZM30 24C31.5913 24 33.1174 24.6321 34.2426 25.7574C35.3679 26.8826 36 28.4087 36 30C36 31.5913 35.3679 33.1174 34.2426 34.2426C33.1174 35.3679 31.5913 36 30 36C28.4087 36 26.8826 35.3679 25.7574 34.2426C24.6321 33.1174 24 31.5913 24 30C24 28.4087 24.6321 26.8826 25.7574 25.7574C26.8826 24.6321 28.4087 24 30 24ZM30 26.4C29.0452 26.4 28.1295 26.7793 27.4544 27.4544C26.7793 28.1295 26.4 29.0452 26.4 30C26.4 30.9548 26.7793 31.8705 27.4544 32.5456C28.1295 33.2207 29.0452 33.6 30 33.6C30.9548 33.6 31.8705 33.2207 32.5456 32.5456C33.2207 31.8705 33.6 30.9548 33.6 30C33.6 29.0452 33.2207 28.1295 32.5456 27.4544C31.8705 26.7793 30.9548 26.4 30 26.4Z"
                          fill="#03045E"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_328_1855"
                          x="0"
                          y="0"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="4" dy="4" />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_328_1855"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_328_1855"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Event