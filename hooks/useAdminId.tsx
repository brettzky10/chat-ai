"use client";

import { chatMemberAdminRef } from "@/lib/converters/chat-members";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


//This goes into chatMemberAdminRef(see converters) in firestore chats/members and finds the one user where isAdmin=true b/c user created chat
function useAdminId({chatId}:{chatId: string}) {

    const [adminId, setAdminId] = useState<string>("");


    // b/c it is a query, we getDocs, then grab the first(and only) admin using [0]. the set adminId to the global state
    useEffect(()=> {
        const fetchAdminStatus = async () => {
            const adminId = (await getDocs(chatMemberAdminRef(chatId))).docs.map(
                (doc) => doc.id
            )[0];

            setAdminId(adminId);
        };

        fetchAdminStatus();
    }, [chatId]);

  return adminId
}

export default useAdminId