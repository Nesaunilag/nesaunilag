import React, { Suspense } from "react";
import { Heading } from "../../components";
import GallerySectionA from "./GallerySectionA";
import GallerySectionB from "./GallerySectionB";
import GallerySectionC from "./GallerySectionC";
import GallerySectionD from "./GallerySectionD";
import GallerySectionE from "./GallerySectionE";



export default function Gallery() {
    return (
        <>

            <div className="flex justify-center bg-[#d97213] py-12 md:py-5 gap-1">
                <div className="container-sm flex md:px-5">
                <Heading
                    size="heading3xl"
                    as="h1"
                    className="font-bold text-[#ffff] md:text-[44px] sm:text-[38px]"
                >
                    GALLERY
                </Heading>
                </div>
            </div>


            <div className="flex flex-col gap-[50px] md:gap-[75px] sm:gap-[50px]">
                <GallerySectionA />
                <GallerySectionB />
                <GallerySectionC />
                <GallerySectionD />
                <GallerySectionE />
            </div>
        </>
    );
}
