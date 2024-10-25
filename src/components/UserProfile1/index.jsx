import { Img, Text, Heading} from "./..";
import React from "react";

export default function UserProfile1({ userName = "Ogunmuyiwa Temidayo", userTitle = "President", userLinkdin = "https://www.linkedin.com/", userImage = "https://example.com/image.jpg", ...props }) {
  return ( 
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-3 rounded-t1-[20px] rounded-tr-[20px] rounded-bl-[20px] bg-[#fcf5ed]`} 
    >
      <div className="h-[274px] w-[100%] bg-[#d9d9d9]">
        <Img src={userImage} alt="userImage" className="h-full w-full" />
      </div>
      <div className="mb-4 ml-5 mr-[26px] flex flex-col gap-1 self-stretch">
        <div className="flex flex-col items-start">
          <Heading size="headinglg" as="h5" className="text-[20px] font-semibold text-[#000000]"> {userName} </Heading>
          <Text size="textlg" as="p" className="text-[18px] font-normal text-[#000000]"> {userTitle} </Text>
        </div>
        <a href={userLinkdin} target="_blank" rel="noopener noreferrer">
          <Img src={`${process.env.PUBLIC_URL}/images/linkdin.svg`} alt="linkdin" className="h-[24px] w-[24px]" />
        </a>
      </div>
    </div>
  );
}