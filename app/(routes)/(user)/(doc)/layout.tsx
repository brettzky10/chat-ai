import "@/styles/text-editor.css";
//import "../../globals.css";
import "@/styles/doc.css";
import { Header } from "@/components/header";

export default function DocLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div className="">
            
                {children}
            
    </div>
    )
}