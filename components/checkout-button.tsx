"use client";

import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { Button } from "./ui/button";

import { useSession } from "next-auth/react";
import { useState } from "react";
import LoadingSpinner from "./loading-spinnner";
import { useSubscriptionStore } from "@/store/store";
import ManageAccountButton from "./manage-account-button";


const CheckoutButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);

  const isLoadingSubscription = subscription === undefined;
  const isSubscribed = subscription?.status === "active" && subscription?.role === "pro";

  const createCheckoutSession = async () => {
    if(!session?.user.id) return;

    setLoading(true)

    //add document in firebase v9
    const docRef = await addDoc(collection(db, 'customers', session.user.id, "checkout_sessions"), {
      price: "price_1O84TgHtmkmVGnrHia2rnxgU", //<--Test from stripe dashboard/products  LIVE: price_1O83R2HtmkmVGnrHLxByIQP9
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    //stripe extension on firebase for checkout
    return onSnapshot(docRef, snap => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }

      if (url) {
        window.location.assign(url);
        setLoading(false)
      }
    })

    //redirect


  }


  return (
    <Button variant={"checkout"} className="mt-5" onClick={() => createCheckoutSession()}>
      {isSubscribed ? (
        <ManageAccountButton/>
      ) : isLoadingSubscription || loading ? <LoadingSpinner/> : 
        <button onClick={()=> createCheckoutSession()}>
          Upgrade
        </button>
      }
    </Button>
  )
}

export default CheckoutButton