
import { AboutSection } from "@/components/landing/about-section";
import { AppSection } from "@/components/landing/app-section";
import ContactSection from "@/components/landing/contact-section";
import HeroSection from "@/components/landing/hero-section";
import { LandingContent } from "@/components/landing/landing-content";
import LandingFaq from "@/components/landing/landing-faq";
import LandingFeatures from "@/components/landing/landing-features";
import LandingFooter from "@/components/landing/landing-footer";
import { LandingHero } from "@/components/landing/landing-hero";
import LandingPitch from "@/components/landing/landing-pitch";
import LandingZigzag from "@/components/landing/landing-zigzag";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate pt-14 h-screen">
      <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">

        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EFF0D1] to-[#77BA99] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
        />
      </div>
       {/*  <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <LandingHero/>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
                <Image
                  unoptimized
                  src="/example-1.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div> */}
        <HeroSection/>
        <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">

        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#EFF0D1] to-[#77BA99] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
        />
      </div>
      <div className="h-full ">
      <AppSection/>
      <LandingFeatures/>
      <AboutSection/>
      {/* <LandingZigzag/> */}
      {/* <LandingContent /> */}
      <ContactSection/>
      <LandingFaq/>
      <LandingFooter/>
    </div>
    </div>
  )
}
