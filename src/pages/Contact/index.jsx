import React, { Suspense } from "react";
import { Heading, Img, Button, Text } from "../../components";
import UserProfile3 from "../../components/UserProfile3";
import { Link } from "react-router-dom"; // Import Link
import "./style.css";
import { image } from "framer-motion/client";



const data = [
  { emailLabel: "Email", emailAddress: "Nesa.lagos@gmail.com", icon: "/images/svg/email.svg" }, 
  { emailLabel: "Call", emailAddress: "+234 904 844 9412", icon: "/images/svg/call.svg" },
  {
    emailLabel: "",
    emailAddress: "",
    socials: [
      { name: "whatsapp", icon: "/images/svg/whatsapp.svg", url: "https://wa.me/2349048449412" },
      { name: "instagram", icon: "/images/svg/instagram.svg", url: "https://instagram.com/unilag_nesa?igshid=OGQ5ZDc2ODk2ZA==" },
      { name: "twitter", icon: "/images/svg/twitter.svg", url: "https://x.com/Unilag_NESA" },
      { name: "linkedin", icon: "/images/svg/linkedin.svg", url: "https://www.linkedin.com/company/nesaunilag/about/" },
      { name: "tiktok", icon: "/images/svg/tiktok.svg", url: "https://tiktok.com/@nesaunilag" },
      { name: "youtube", icon: "/images/svg/youtube.svg", url: "https://youtube.com/@nesaunilag" },
    ],
    icon: "",
  },  
  {
    emailLabel: "Address",
    emailAddress: (
      <>
        Department of Economics, Faculty of Social Science,
        <br />
        University of Lagos Rd, Akoka. <br />
        Lagos 100213, Nigeria
      </>
    ),
    icon: "/images/svg/location.svg",
  },
];

export default function Contact() {
  
  return (
    <div>

      <div className="flex justify-center bg-[#d97213] py-12 md:py-5">
        <div className="container-sm flex px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="font-bold text-[#ffff] md:text-[44px] sm:text-[38px]"
          >
            GET IN TOUCH WITH US
          </Heading>
        </div>
      </div>


      
      <div className="flex flex-col items-center gap-[60px] bg-[#ffffff] py-[60px] md:py-5 sm:gap-[30px]"> 
        <div className="container-sm md: px-5">
          <div className="flex flex-col gap-[30px]">
            <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-2"> 
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfile3 {...d} key={"gridlockone" + index} />
                ))}
              </Suspense>
            </div>
            <div>
            <div className="location p-5 lg:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7928.091575197434!2d3.391666!3d6.5158890000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d14ca094d83%3A0x669491a69639e951!2sFaculty%20of%20Social%20Science%2C%20UNILAG!5e0!3m2!1sen!2sng!4v1732612416401!5m2!1sen!2sng"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div> 
        </div>


      
        <div className="flex flex-col items-center self-stretch">
          <div className="container-sm flex flex-col items-start gap-7 px-4 md:px-5">
            <Text 
              as="h2"
              className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[20px] font-semibold text-[#000000] md:text-[44px] sm:text-[32px]">
              SEND A MESSAGE
            </Text>
            <div className="flex flex-col items-start gap-[30px] self-stretch">
              <div className="flex flex-col gap-5 self-stretch">
              <form action="https://formsubmit.co/Nesa.lagos@gmail.com" method="POST" className="space-y-4">
                <div className="form">
                  <input type="text" id="name" name="name" placeholder="Name" />
                </div>
                <div className="form">
                  <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="form">
                  <textarea id="message" name="message" placeholder="Message" />
                </div>
                <Link to="/*">
                  <Button type="submit" size="3x1" className="min-w-[168px] bg-[#d97213] text-white rounded-[30px] px-[34px] font-semibold sm:px-5">Submit</Button>
                </Link>
              </form>

              </div>
            </div>
          </div>
        </div>


      </div>




    </div>
  );
}
