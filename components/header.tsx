import { getServerSession } from "next-auth"
import DarkModeToggle from "./dark-mode-toggle"
import { Logo } from "./logo"
import { UserButton } from "./user-button"
import { authOptions } from "@/auth"
import {MessagesSquareIcon} from "lucide-react"
import Link from "next/link"
import CreateChatButton from "./create-chat-button"
import UpgradeBanner from "./upgrade-banner"
import LanguagesSelect from "./languages-select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"


export async function Header() {

  const session = await getServerSession(authOptions);

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
          <div className="m-3">
              <Logo/>
            </div>
            <div className='flex-1 flex items-center justify-end space-x-4'>
              {/** Cannot have tooltip because of hydration error of button within a button */}
                <LanguagesSelect/>
              {session ? (
                <>
                <Link
                          href={'/chat'} prefetch={false}
                        >
                          <MessagesSquareIcon

                          />
                        </Link>
                  <CreateChatButton/>
                </>
              ) : (
                      <Link href="/pricing">
                        Pricing
                      </Link>
              )

              }
                
                        <DarkModeToggle/>
                  
                      <UserButton session={session}/>
                  
                
            </div>

        </nav>
        <UpgradeBanner/>
    </header>
  )
}

