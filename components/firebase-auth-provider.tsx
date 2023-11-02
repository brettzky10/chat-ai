"use client";

import {Session} from "next-auth";
import { useSession} from "next-auth/react"
import {useEffect} from "react"

async function syncFirebaseAuth(session: Session){
    if (session && session.firebaseToken){
        try{

        } catch (error){

        }
    }
}


const FirebaseAuthProvider = (
    {children}:{children: React.ReactNode;}
) => {
    const {data: session} = useSession();
    
    useEffect(() => {
        if (!session) return;

        syncFirebaseAuth(session);

    }, [session])


  return  <>
    {children}
  </>
}

export default FirebaseAuthProvider