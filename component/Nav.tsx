"use client";
import Link from "next/link";
import Image from "next/image";
import "@styles/nav.css";
import { useEffect, useState } from "react";
export default function Nav() {
  const [providers,setProviders]:any[]= useState();
  const isLoggedIn = true;
  function getProvider() {
    console.log("Hello World")
  }
  function signIn(id:any){
    console.log("Id :: ",id);
  }
  useEffect(() => {
    const setPro = async () => {
      const response = await getProvider();
      setProviders(response)
    }
    setPro();
  },[])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 logo">
        <Image
          src="/assets/images/ai.jpeg"
          width={50}
          height={50}
          alt="logo"
          className="object-contain"
        />
        <span className="title sm:flex hidden">Prompting</span>
      </Link>
      {/*Mobile navigation*/}
      <div className={`${isLoggedIn ? 'mobile-navigation sm:flex hidden' : 'not-have'}`}>
        {isLoggedIn ? (
          <>
          <div className="create-post flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="md:bg-black">
              Create Post
            </Link>
          </div>
          <div className="sign-out flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="md:bg-white">
            Sign Out
          </Link>
        </div>
          </>
        ) : (
          <>
          {providers && Object.values(providers).map((provider:any) => (
            <button type="button" key={provider.name}
            onClick={() => signIn(provider.id)}
            className="sign-in"
            >
              Sign In
            </button>
          ))}
          </>
        )}
      </div>
    </nav>
  );
}
