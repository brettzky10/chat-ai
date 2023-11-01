"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    //const { isSignedIn } = useAuth(); <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-black dark:text-white">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex flex-row">
          <TypewriterComponent
            options={{
              strings: [
                "Chat",
                "Play",
                "Enjoy",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <span className="text-black dark:text-white">in any Language.</span>
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-md font-normal">
                You speak your language, they speak their language. {" "}
                <span className="text-indigo-600 dark:text-indigo-500">
                  Let AI handle the translation.
                </span>
              </p>
      <div>
        <Link href={"/chat"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold transition transform active:scale-95 duration-200">
            Get Started
          </Button>
        </Link>
      </div>
      <Link
      href={"/pricing"}
      >
          <div className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm font-normal pt-3">
          No credit card required.
        </div>
      </Link>
      
    </div>
  );
};