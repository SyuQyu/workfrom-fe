import clsx from 'clsx';
import '@/styles/index.scss';
import { POPPINS, ROBOTO_MONO } from '@/contants/fonts';

import DefaultLayout from '@/components/layouts/default-layouts';

export default function UnprotectedLayout({ children }: Props) {
    return (
        <DefaultLayout>{children}</DefaultLayout>
    );
}

type Props = {
    children: React.ReactNode;
};
