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
                <p className="text-[15px] font-medium text-zinc-400">
                  Take your profile to the next level with Profile Builder AI
                </p>
                {/* socials */}
                <div className="flex gap-7 text-[18px] text-zinc-400 justify-center md:justify-start">
                  {iconsTab.map(({ icon }, index) => {
                    return (
                      <div
                        key={index}
                        className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:cursor-pointer"
                        style={{ transition: "all 0.3s" }}
                      >
                        {icon}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[16px] font-medium text-zinc-400">
                  Privacy Policy | © {new Date().getFullYear()} Profile Builder AI <br />{" "}
                  Design by{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.radiustheme.com/"
                  >
                    Brett L
                  </a>
                </p>
              </div>
  
              {/* middle div */}
              <div className="flex flex-col gap-8 relative pb-5">
                <p className="text-[22px] font-bold footer-main text-gray-200">Blog Posts</p>
  
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-gradient-to-r from-purple-400 to-pink-600"></span>
  
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                  Create a LinkedIn Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Dating Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Discord Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Youtube Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Tinder Profile
                </p>
              </div>
              {/* middle div */}
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main text-gray-200">More Posts</p>
  
                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-gradient-to-r from-purple-400 to-pink-600"></span>
  
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Teams Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Company Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Zoom Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Bumble Profile
                </p>
                <p className="text-[16px] hover:text-purple-400 cursor-pointer text-zinc-400 font-medium hover:font-medium">
                Create a Hinge Profile
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