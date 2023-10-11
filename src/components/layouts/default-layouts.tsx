'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
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
