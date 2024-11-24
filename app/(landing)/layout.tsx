import { Header } from "@/components/header";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div>
            <Header/>
            <div className=" w-full flex flex-col flex-1 ">
                    {children}
            </div>
        </div>
    )
}