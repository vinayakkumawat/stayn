"use client"

import { IconSmartHome } from "@tabler/icons-react";
import React from "react";
import { Button } from "./ui/button";
import { signOut, signIn } from "next-auth/react"
import { auth } from "@/lib/auth"

const Navbar = async () => {

    const session = await auth()

    return (
        <nav className="w-full px-8 py-2 flex justify-between items-center bg-background border border-neutral-600 rounded-full">
            <div className="flex items-center gap-1">
                <IconSmartHome /><span className="font-semibold text-lg">Stayn</span>
            </div>
            <div className="flex gap-2">
                <Button variant={'link'}>About</Button>
                <Button variant={'link'}>Contact</Button>
                {session ? (
                    <Button onClick={() => signOut()} variant={'default'}>Sign Out</Button>
                    ) : (
                        <Button onClick={() => signIn()} variant={'default'}>Sign In</Button>
                    )}                
            </div>
        </nav>
    )
}

export default Navbar