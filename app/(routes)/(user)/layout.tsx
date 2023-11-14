
//import "../../globals.css";

import { Header } from "@/components/header";

export default function ChatsLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div className="">
            <Header/>
            <div className="bg-gray-100 dark:bg-slate-950 h-screen">
                {children}
                </div>
    </div>
    )
}