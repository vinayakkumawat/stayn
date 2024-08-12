import { IconSmartHome } from "@tabler/icons-react";
import React from "react";
import { Button } from "./ui/button";

const Navbar = async () => {

    return (
        <nav className="w-full px-8 py-2 flex justify-between items-center bg-background border border-neutral-600 rounded-full">
            <div className="flex items-center gap-1">
                <IconSmartHome /><span className="font-semibold text-lg">Stayn</span>
            </div>
            <div className="flex gap-2">
                <Button variant={'link'}>About</Button>
                <Button variant={'link'}>Contact</Button>             
            </div>
        </nav>
    )
}

export default Navbar