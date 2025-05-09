import React, { Suspense } from "react";
import { Heading } from "../../components";



export default function Alumni() {
    return (
        <>

            <div className="flex justify-center bg-[#d97213] py-12 md:py-5 gap-1">
                <div className="container-sm flex px-5 md:px-5">
                <Heading
                    size="heading3xl"
                    as="h1"
                    className="font-bold text-[#ffff] md:text-[44px] sm:text-[38px]"
                >
                    ALUMNI MAKING A DIFFERENCE
                </Heading>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">

            

            <div className="container-sm md:px-5 my-20">
            <div className="grid grid-cols-1 justify-center gap-5 md:grid-cols-4 sm:grid-cols-2">
             <Suspense fallback={<div>Loading feed...</div>}> {[...Array(20)].map((d, index) => (
            <div key={"gridframe" + index} className="h-[366px] w-full bg-[#cacaca]" />
            ))} </Suspense>
            </div>
            </div>
            </div>
        </>
    );
}