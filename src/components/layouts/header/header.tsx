

import Link from 'next/link';
import React from "react";

import { ImageWithFallback } from "@/components/common";

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="p-1 font-bold text-white text-sm">
                <Link href="/spaces" className="flex items-center">
                    Office & Coworking Space
                </Link>
            </li>
            <li className="p-1 font-bold text-white text-sm">
                <Link href="/blog" className="flex items-center">
                    Blog
                </Link>
            </li>
            <li className="p-1 font-bold text-white text-sm">
                <Link href="#" className="flex items-center">
                    Contact Us
                </Link>
            </li>
            <li className="p-1 font-bold text-white text-sm">
                <Link href="/building-owner" className="flex items-center">
                    As Bulding Owner
                </Link>
            </li>
        </ul>
    );
    return (
    <div className="sticky top-5 z-10 h-max max-w-full rounded-xl py-2 px-4 lg:px-8 lg:py-4 m-5 shadow-2xl backdrop-blur-xl bg-blue-500">
            <div className="flex items-center justify-between text-white font-bold">
                <Link href="/">
                    <ImageWithFallback
                        priority={true}
                        width={0}
                        height={0}
                        sizes='10vw'
                        className='w-[150px] max-w-full rounded-lg object-contain' src='/images/Logo-WF.png' alt="" />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <button
                        type="button"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                        aria-label="Toggle navigation"
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Props removed, not used
