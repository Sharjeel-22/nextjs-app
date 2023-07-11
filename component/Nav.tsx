import Link from "next/link";
import Image from "next/image";
import "@styles/nav.css";
import { useState,useEffect } from "react";
export default function Nav() {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className="flex gap-2 logo">
            <Image  src="/assets/images/ai.jpeg"
            width={50}
            height={50}
            alt="logo"
            className="object-contain"
            />
            <span className="title">Prompting</span>
        </Link>
    </nav>
  )
}
