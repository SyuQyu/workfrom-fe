import clsx from 'clsx';
import '@/styles/index.scss';
import { POPPINS, ROBOTO_MONO } from '@/contants/fonts';

import DefaultLayout from '@/components/layouts/default-layouts';
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
