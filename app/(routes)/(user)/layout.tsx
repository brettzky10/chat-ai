export default function ChatsLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div className="bg-slate-100 dark:bg-slate-900">
            <div className="h-screen w-full flex flex-col  flex-1">
                {children}
            </div>
    </div>
    )
}