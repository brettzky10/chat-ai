"use client";

import { Message, sortedMessagesRef } from "@/lib/converters/message";
import { useLanguageStore } from "@/store/store";
import { MessageCircleIcon } from "lucide-react";
import { Session } from "next-auth";
import { createRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "../loading-spinnner";
import UserAvatar from "../user-avatar";



function ChatMessages({ chatId, initialMessages, session}: {chatId: string; initialMessages: Message[]; session: Session | null}) {

    const language = useLanguageStore((state) => state.language);
    const messagesEndRef = createRef<HTMLDivElement>();

    //real time listener:
    const [messages, loading, error] = useCollectionData<Message>(sortedMessagesRef(chatId), {
        initialValue: initialMessages,
    });

    //If messages change, scroll message into view
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, messagesEndRef]);

  return (
    <div className="p-5">
        {!loading && messages?.length === 0 && (
            <div className="flex flex-col justify-center items-center text-center p-20 rounded-xl space-y-2 bg-indigo-400 text-white font-extralight">
                <MessageCircleIcon className="h-10 w-10"/>
                <h2>
                    <span className="font-bold">Invite a friend</span> &{" "}
                    <span className="font-extralight">send your first message in</span>{" "}
                    <span className="font-bold">ANY language</span>{" "}
                    below to get started
                </h2>
                <p>The AI will auto-detect & translate it all for you</p>
            </div>
        )}

        {messages?.map((message) => {
            //does message id = session user
            const isSender = message.user.id === session?.user.id;
            
            return (
                <div key={message.id} className="flex my-2 items-end">
                    <div className={`flex flex-col relative space-y-2 p-4 w-fit line-clamp-1 mx-2 rounded-lg ${
                        isSender
                        ? "ml-auto bg-[#77ba99] text-black rounded-br-none"
                        : "bg-slate-700 text-white rounded-bl-none"
                    }`}>
                        <p className={`text-xs italic font-extralight line-clamp-1 ${
                            isSender
                            ? "text-right"
                            : "text-left"
                        }`}>
                            {message.user.name.split(" ")[0]}
                        </p>
                        <div className="flex space-x-2">
                            <p>{message.translated?.[language] || message.input}</p>
                            {!message.translated && <LoadingSpinner/>}
                        </div>
                    </div>

                    <UserAvatar
                        name={message.user.name}
                        image={message.user.image}
                        className={`${!isSender && "-order-1"}`}
                    />
                </div>
            );
        })}

        <div ref={messagesEndRef}/>
    </div>
  )
}

export default ChatMessages