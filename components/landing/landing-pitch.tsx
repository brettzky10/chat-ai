"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { BrainCircuit } from "lucide-react";

const LandingPitch = () => {
    return (
        <div className="px-10 pb-20">
            <div className="text-center">
                <Badge variant="secondary" color="white">
                    How it Works
                </Badge>
                <h2 className="text-3xl text-white font-extrabold max-w-3xl py-5 lg:text-5xl mx-auto">Create attention grabbing profiles in <span className="text-purple-400">3</span> easy steps</h2>
            </div>

            <div className="pt-10">
                <h1 className="text-2xl md:text-5xl font-black text-white">Step <span className="text-purple-400">1</span></h1>
                <p className="text-sm md:text-xl font-light text-zinc-400 pt-3 pb-3">Upload images from at least three angles</p>
            </div>
            <div className="flex flex-row container mx-auto mt-5 justify-between items-center justify-content-evenly">
                <div className="flex flex-col justify-evenly z-[10]">
                    <div className="flex flex-row">
                        <Card className=" shadow-lg rounded-lg skew-y-3 rotate-12 pb-0">
                            <CardContent className="pb-0">
                                <Image
                                    width={100}
                                    height={60}
                                    alt="drag and drop"
                                    src="/profile-1.png"
                                />
                            </CardContent>
                        </Card>
                        <Card className=" shadow-lg rounded-lg -rotate-5 pb-0">
                            <CardContent className="pb-0">
                                <Image
                                    width={100}
                                    height={60}
                                    alt="drag and drop"
                                    src="/profile-3.png"
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-row">
                        <Card className=" shadow-lg rounded-lg pb-0 ">
                            <CardContent className="pb-0">
                                <Image
                                    width={100}
                                    height={60}
                                    alt="drag and drop"
                                    src="/profile-2.png"
                                />
                            </CardContent>
                        </Card>
                        <Card className=" shadow-lg rounded-lg skew-y-1 -rotate-12 pb-0">
                            <CardContent className="pb-0">
                                <Image
                                    width={100}
                                    height={60}
                                    alt="drag and drop"
                                    src="/profile-4.png"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="scale-[0.8] hidden md:flex md:flex-col items-center pl-20 relative">
                    <div className="flex flex-row space-x-5 items-center z-20 absolute top-20">
                        {/*
                        <BrainCircuit size={80} color="white" />*/}
                        <div className="flex flex-col space-y-1">
                            <h1 className="text-lg font-bold text-gray-900">Prompts:</h1>
                            <Badge variant="secondary" 
                            color="white">
                                @me in a suit and tie
                            </Badge>
                            <Badge variant="secondary" color="white">
                                @me smiling
                            </Badge>
                        </div>

                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="none" viewBox="0 0 200 200"><path fill="url(#paint0_linear_105_435)" d="M0 47.423c0-9.4 6.536-17.517 15.77-19.274C36.483 24.209 73.342 18 100 18s63.517 6.208 84.23 10.149c9.234 1.757 15.77 9.875 15.77 19.274v102.951c0 9.05-6.069 16.959-14.88 19.022-20.437 4.785-57.769 12.538-85.12 12.538-27.351 0-64.683-7.753-85.12-12.538C6.069 167.333 0 159.424 0 150.374V47.424Z"></path><defs><linearGradient id="paint0_linear_105_435" x1="100" x2="100" y1="18" y2="181.934" gradientUnits="userSpaceOnUse"><stop stop-color="#A7B5FF"></stop><stop offset="1" stop-color="#F3ACFF"></stop></linearGradient></defs></svg>
                    </div>
                    
                    <div className="rotate-45 text-white z-20 absolute bottom-5">
                        <Image
                            color="white"
                            width={300}
                            height={100}
                            alt="add photos"
                            src="/addphotos.svg"
                        />
                    </div>
                    
                    {/*
                    <Image
                        width={400}
                        height={200}
                        alt="arrow"
                        src="/arrow-3.png"
                    /> */}

                </div>
                <div className="bg-white mx-auto hidden md:flex">
                    <div className="flex relative">
                        <div className="w-72 h-40 bg-gray-600 transform transition-all skew-x-12 -skew-y-12 absolute -top-12 -left-12 rounded-lg">
                        </div>
                        <div className="w-72 h-40 bg-purple-400 transform transition-all skew-x-12 -skew-y-12 absolute -top-16 -left-16 rounded-lg">
                        </div>
                        <div className="w-72 h-40 bg-white flex justify-center items-center border-2 border-black transform transition-all skew-x-12 -skew-y-12 absolute -top-20 -left-20 rounded-lg">
                            <Image
                                width={150}
                                height={80}
                                alt="drag and drop"
                                src="/profile-final.png"
                            />
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex scale-[0.8] rotate-90 md:hidden items-center text-center">
                <Image
                    width={400}
                    height={200}
                    alt="arrow"
                    src="/arrow-3.png"
                />
            </div>

            <Card className="shadow-lg rounded-lg pb-0 block md:hidden w-[150px]">
                <CardContent className="pb-0">
                    <Image
                        width={100}
                        height={60}
                        alt="drag and drop"
                        src="/profile-final.png"
                    />
                </CardContent>
            </Card>

            {/** Step 2 */}

            <div className="pt-20 items-end">
                <h1 className="text-2xl md:text-5xl font-black text-white text-end">Step <span className="text-purple-400">2</span></h1>
                <p className="text-sm md:text-xl font-light text-zinc-400 pt-3 pb-3 text-end">We then provide professional headshots you can use in your profiles</p>
            </div>

            {/** Step 3 */}

            <div className="pt-20">
                <h1 className="text-2xl md:text-5xl font-black text-white">Step <span className="text-purple-400">3</span></h1>
                <p className="text-sm md:text-xl font-light text-zinc-400 pt-3 pb-3">Let our AI profile consultant  help you write the perfect bio</p>
            </div>
            <Image
                width={200}
                height={100}
                alt="linkedin"
                src="/linkedin-1.png"
            />


        </div>
    )
}

export default LandingPitch