'use client';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

import Footer from './footer/footer';
import Header from './header/header';

export default function DefaultLayout({ children, bgColor }: Props) {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <body id='layout-default' className={bgColor}>
            <Header />
            <main className='main'>{children}</main>
            <Footer />
        </body>
    );
}

type Props = {
    children: React.ReactNode;
    bgColor?: string;
};
