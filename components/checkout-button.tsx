"use client";

import { Button } from "./ui/button"

import { useSession } from "next-auth/react";


const CheckoutButton = () => {
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    if(!session) return;
  }


  return (
    <Button variant={"checkout"} className="mt-5" onClick={() => createCheckoutSession()}>
      Sign Up
    </Button>
  )
}

export default CheckoutButton