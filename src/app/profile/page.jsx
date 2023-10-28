"use client"
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const Page = () => {
    const session = useSession();
  return (
    <div>
        <button onClick={()=>signOut("google")}>Logout</button>
      Signout
    </div>
  )
}

export default Page
