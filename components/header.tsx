import { getServerSession } from "next-auth"
import DarkModeToggle from "./dark-mode-toggle"
import { Logo } from "./logo"
import { UserButton } from "./user-button"
import { authOptions } from "@/auth"
import {LayoutDashboard, MessagesSquareIcon} from "lucide-react"
import Link from "next/link"
import CreateChatButton from "./create-chat-button"
import UpgradeBanner from "./upgrade-banner"
import LanguagesSelect from "./languages-select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Button } from "./ui/button"
import LoadingSpinner from "./loading-spinnner"
import { ModeToggle } from "./mode-toggle"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Image from "next/image"
import NavLinks from "./navbar-site-links"

export async function Header() {

  const session = await getServerSession(authOptions);

  return (
    <header className='sticky top-0 z-50  '>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2  mx-10'>
        <div className='mx-5'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#77BA99] dark:text-white font-bold flex flex-row text-xl">
                  {/* <MountainIcon className="h-6 w-6" /> */}
                  <Image
                  src="/letter-b.png"
                  alt="logo"
                  width={28}
                  height={28}
                  className="mx-2"
                  />
                  Bear<span className="text-[#77BA99] dark:text-white">ear</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
             {/*  <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/translate/clerk">Translate</BreadcrumbLink>
              </BreadcrumbItem> */}

            </BreadcrumbList>
          </Breadcrumb>
          </div>
          <NavLinks/>
            <div className='flex-1 flex items-center justify-end space-x-3'>
              {/** Cannot have tooltip because of hydration error of button within a button */}
                <LanguagesSelect/>
              {session ? (
                <>
                
                {/* <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger >
                      <Link href="/dashboard" prefetch={false}> 
                        <Button variant={"ghost"}>
                        <LayoutDashboard/>
                          </Button>
                      </Link>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black">
                        <p>Dashboard</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider> */}

                  {/* Chats */}
                <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger >
                      <Link
                          href={'/chat'} prefetch={false}
                        >
                          <Button variant={"ghost"}>
                          <MessagesSquareIcon/>
                          </Button>
                          
                            
                          
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black">
                        <p>Chat List</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {/* Create Chat */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CreateChatButton/>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black">
                        <p>Create Chat</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                </>
              ) : (
                      null
              )

              }
                
                        {/* <DarkModeToggle/> */}
                      
                        
                        <ModeToggle/>
                      <UserButton session={session}/>
                  
                
            </div>

        </nav>
        <UpgradeBanner/>
    </header>
  )
}

