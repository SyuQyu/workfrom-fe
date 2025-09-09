import '@/styles/index.scss';

import clsx from 'clsx';

import { POPPINS, ROBOTO_MONO } from '@/contants/fonts';

export const metadata = {
    title: {
        default: 'Workfrom.id',
        template: '%s | Workfrom.id',
    },
    description: 'Workfrom.id tes desc',
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={clsx('scroll-smooth', POPPINS.variable, ROBOTO_MONO.variable)}>
            {children}
        </html>
    );
}

type Props = {
    children: React.ReactNode;
};
