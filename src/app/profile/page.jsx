"use client"
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const session = useSession();
    const router = useRouter();
    (session.status == "unauthenticated") ? router.push("/login") : null ;
  return (
    <div>
        <button onClick={()=>signOut("google")}>Logout</button>
      Signout
    </div>
  )
}

export default Page
