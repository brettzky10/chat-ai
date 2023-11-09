import { Header } from "@/components/header";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div>
            <Header/>
            <div className="h-screen w-full flex flex-col flex-1 ">
                    {children}
            </div>
        </div>
    )
}