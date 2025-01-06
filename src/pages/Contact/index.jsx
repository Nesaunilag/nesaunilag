import React, { Suspense } from "react";
import { Heading, Img, Button } from "../../components";
import UserProfile3 from "../../components/UserProfile3";
import "./style.css";



const data = [
  { emailLabel: "Email", emailAddress: "Nesaunilagblog@gmail.com" }, { emailLabel: "Call", emailAddress: "+2347066163148" },
  { emailLabel: "Socials", emailAddress: "Nesaunilagblog@gmail.com" },
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
  },
];

export default function Contact() {
  
  return (
    <div>

      <div className="flex justify-center bg-[#d97213] py-12 md:py-5">
        <div className="container-sm flex md:px-5">
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
          <div className="container-sm flex flex-col items-start gap-7 md:px-5">
            <Heading 
              as="h2"
              className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[48px] font-medium text-[#000000] md:text-[44px] sm:text-[38px]">
              SEND A MESSAGE
            </Heading>
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
                <Button type="submit" size="3x1" className="min-w-[168px] bg-blue-900 text-white rounded-[30px] px-[34px] font-semibold sm:px-5">Submit</Button>
              </form>

              </div>
            </div>
          </div>
        </div>


      </div>




    </div>
  );
}
