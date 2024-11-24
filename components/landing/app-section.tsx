"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";
import { HoverBorderGradient } from "../gradient-button";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import ReactCountryFlag from "react-country-flag";
import CategoryLinks from "../translate/category-link";

export function AppSection() {
  return (
    <div className="flex flex-col overflow-hidden ">
        <div className="relative h-full w-full bg-transparent mt-48 md:mt-56 lg:mt-48">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(119,186,153,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(119,186,153,.15),rgba(255,255,255,0))]"></div>
            {/* <Badge variant={"secondary"}>

            </Badge> */}
            <ContainerScroll
            titleComponent={
          <div className="">
            {/* <h1 className="text-4xl md:text-6xl relative font-light bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-500 to-neutral-300 mt-5">
              strengthen your<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
                Customer Experience
              </span>
            </h1> */}
            <div className="text-center items-center flex flex-col">
              {/* <Badge className="text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-3 text-[#77BA99] dark:text-[#EFF0D1]" variant={"secondary"}>
                Small business solutions
              </Badge> */}
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
                Customer Translation Tools
              </h1>
              {/* Start - Explain What we do */}
              <p className="items-center text-[#77BA99] dark:text-[#EFF0D1] text-lg mt-3 mb-5 mx-10">
                In-person tools for customer interaction.
              </p>
            </div>
            <Image
                src={`/images/pos-person.png`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                />
          </div>
        }
      >
        {/* <Image
          src={`/images/translate.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
         <div className="absolute inset-x-24 md:inset-x-96 -z-10 transform-gpu overflow-hidden blur-3xl mx-auto  dark:bg-[#262730] shadow-2xl" aria-hidden="true">

<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#de8f6e] to-[#77ba99] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
style={{
  clipPath:
    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
}}
/>
</div>
        <div className="items-center justify-center flex flex-col pt-20 bg-transparent">
            <HoverBorderGradient
                //onClick={handleOnRecord}
                className="mt-10 m-auto flex items-center justify-center bg-[#EFF0D1] hover:bg-[#77BA99] rounded-full w-20 h-20 focus:outline-none"
              >
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                >
                  <path
                    fill="#82735C" // Change fill color to the desired color
                    d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                  />
                </svg>
              </HoverBorderGradient>
                
                <CategoryLinks/>
                <Skeleton className="mt-3 mx-5 w-full rounded-full h-12"/>
                <Skeleton className="mt-2 w-full rounded-full h-12"/>
        </div>
      

      </ContainerScroll>
        </div>
      
    </div>
  );
}
