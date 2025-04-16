import { Text } from "..";
import React from "react";

export default function UserProfile3({
  emailLabel = "Email",
  emailAddress = "Nesaunilagblog@gmail.com",
  icon = "",
  socials = [],
  ...props
}) {
  const isSocialSection = socials.length > 0;

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full gap-2.5 p-[30px] sm:p-5 bg-[#ffffff] shadow-[5px_5px_20px_2px_#00000019] rounded-[10px]`}
    >
      <div className="flex items-center gap-2.5 self-stretch">
        {isSocialSection ? (
          <div className="text-[20px] font-normal text-[#000000] sm:text-[17px]">
            Socials
          </div>
        ) : (
          <div className="w-[48px]">
            <img src={icon} alt={emailLabel} className="w-6 h-6" />
          </div>
        )}
        <Text as="p" className="text-[20px] font-normal text-[#000000] sm:text-[17px]">
          {emailLabel}
        </Text>
      </div>

      <Text size="text2x1" as="p" className="mb-2 text-[17px] font-normal text-[#000000] sm:text-[20px]">
        {emailAddress}
      </Text>

      {isSocialSection && (
        <div className="flex gap-4 flex-wrap mt-1">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-12 h-12 hover:scale-110 transition"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
