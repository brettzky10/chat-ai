import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function LandingFooter() {
    const iconsTab = [
      { icon: <Facebook /> },
      { icon: <Twitter /> },
      { icon: <Instagram /> },
      { icon: <Youtube /> },
    ];
    return (
      <>
        <footer>
          <div className="container mx-auto  py-[10rem]">
            {/* footer div all */}
            <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
              {/* logo side */}
              <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                <p className="text-[24px] font-medium text-zinc-400">
                  Bearear
                </p>
                {/* socials */}
                <div className="flex gap-7 text-[18px] text-zinc-400 justify-center md:justify-start">
                  {iconsTab.map(({ icon }, index) => {
                    return (
                      <div
                        key={index}
                        className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-gradient-to-r from-[#EFF0D1] to-[#77BA99] hover:text-black hover:cursor-pointer"
                        style={{ transition: "all 0.3s" }}
                      >
                        {icon}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[16px] font-medium text-zinc-400">
                  Privacy Policy | © {new Date().getFullYear()} Bearear <br />{" "}
                  Created by{" "}
                  <a
                  className="underline"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.Launchpotion.com/"
                  >
                    Launch Potion
                  </a>
                </p>
              </div>
  
              {/* middle div */}
              <div className="flex flex-col gap-8 relative pb-5">
                <p className="text-[22px] font-bold footer-main text-gray-200">Blog Posts</p>
  
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-gradient-to-r from-[#EFF0D1] to-[#77BA99]"></span>
  
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                  Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
              </div>
              {/* middle div */}
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main text-gray-200">More Posts</p>
  
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-gradient-to-r from-[#EFF0D1] to-[#77BA99]"></span>
  
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
                <p className="text-[16px] hover:text-[#EFF0D1] cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Translate customers for your store
                </p>
              </div>
              <span></span>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default LandingFooter;