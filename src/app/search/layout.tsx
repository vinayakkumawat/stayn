import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container">
            <div className='sticky top-0 pt-4 z-20 bg-background'>
                <Navbar />
            </div>
            <div className="flex justify-center items-center">{children}</div>
        </div>
    );
}
