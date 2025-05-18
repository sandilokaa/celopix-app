'use client'

import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "../navbar/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500);

        return () => clearTimeout(timeout);
    }, [pathname])

    return (
        <div className="flex h-screen overflow-x-hidden px-20">
            <div className="flex flex-col w-full">
                <Navbar />
                {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <ClipLoader size={30} color="#1F7FFF" />
                        </div>
                    ) : (
                        <div>{children}</div>
                )}
            </div>
        </div>
    );
}