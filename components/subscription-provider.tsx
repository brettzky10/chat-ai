"use client";


import { subscriptionRef } from "@/lib/converters/subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";

//Use lib/converter + types/subscriptions for type safety from firestore database

import { useSession} from "next-auth/react";
import { useEffect } from "react";


function SubscriptionProvider(
    {children}: {children: React.ReactNode}
) {

    const { data: session } = useSession();
    const setSubscription = useSubscriptionStore((state) => state.setSubscription)

    useEffect(()=>{
        if (!session) return;
        return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if (snapshot.empty) {
                console.log("user has NO subscription");
                setSubscription(null);
                return;
            } else {
                console.log("user has a subscription");

                //set subscription
                setSubscription(snapshot.docs[0].data());
            }
        }, (error) => {
            console.log("Error getting documents", error);
        }
        )
    }, [session, setSubscription])


  return (
    <>
        {children}
    </>
  )
}

export default SubscriptionProvider