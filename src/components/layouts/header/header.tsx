import React from "react";
import clsx from 'clsx';
import Link from 'next/link';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Collapse,
} from "@material-tailwind/react";
import { ImageWithFallback } from "@/components/common";
export default function Header({ className, authPage, setAuthPage }: Props) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-black"
            >
                <Link href="/spaces" className="flex items-center">
                    Office & Coworking Space
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-black"
            >
                <Link href="#" className="flex items-center">
                    Blog
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-black"
            >
                <Link href="#" className="flex items-center">
                    Contact Us
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-black"
            >
                <Link href="#" className="flex items-center">
                    As Bulding Owner
                </Link>
            </Typography>
        </ul>
    );
    return (
        <div className="sticky top-5 z-10 h-max max-w-full rounded-xl py-2 px-4 lg:px-8 lg:py-4 m-5 shadow-2xl backdrop-blur-xl bg-white">
            <div className="flex items-center justify-between text-blue-gray-900 font-bold">
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
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
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
                    </IconButton>
                </div>
                <div className="lg:flex gap-4 hidden">
                    <Button variant="text" size="sm" className="text-black hidden lg:inline-block" fullWidth>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button size="sm" className="hidden lg:inline-block text-black bg-gold-500" fullWidth>
                        <Link href="/register">register</Link>
                    </Button>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <Button variant="text" size="sm" className="mb-2" fullWidth>
                    <Link href="/login">Login</Link>
                </Button>
                <Button size="sm" className="mb-2 text-black bg-gold-500" fullWidth>
                    <Link href="/register">register</Link>
                </Button>
            </Collapse>
        </div>
    );
}

type Props = {
    className?: string;
    authPage?: boolean;
    setAuthPage?: any;
};
