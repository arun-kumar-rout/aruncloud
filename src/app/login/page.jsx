"use client"
import Loading from '@@/component/Loading';
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import GoogleButton from '@@/component/GoogleButton';
import { useRouter } from "next/navigation";
import Image from 'next/image';


const Login = () => {
    const session = useSession();
    const router = useRouter();
    console.log(session);
    if(session.status ==="loading"){
        return <Loading/>
    }
    if(session.status ==="authenticated"){
        router.push("/")
        return  <button onClick={()=>signOut("google")}>Logout</button>
    }
    if(session.status ==="unauthenticated"){
        return <div onClick={()=>signIn("google")} >
            <GoogleButton/>
            </div>
    }
  return (
    <div>
        <button onClick={()=>signIn("google")}><GoogleButton/></button>
    </div>
  )
}

export default Login