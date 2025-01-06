import { Text, Button, Img } from "..";
import React from "react";

export default function UserProfile3({ emailLabel = "Email", emailAddress = "Nesaunilagblog@gmail.com", ...props }) { 
    return (
        <div
            {...props}
                className={`${props.className} flex flex-col items-start w-full gap-2.5 p-[30px] sm:p-5 bg-[#ffffff] shadow-[5px_5px_20px_2px_#00000019] rounded-[10px]`}
        >
        <div className="flex items-center gap-2.5 self-stretch">
            <Button size="md" shape="round" className="w-[48px] rounded px-2.5">
                <img src="" />
            </Button>
            <Text as="p" className="text-[20px] font-normal text-[#000000] sm:text-[17px]"> {emailLabel}
            </Text>
        </div>
        <Text size="text2x1" as="p" className="mb-7 text-[24px] font-normal text-[#000000] sm:text-[20px]">
            {emailAddress}
        </Text>
        </div>
    );
}