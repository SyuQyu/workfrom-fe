import '@/styles/index.scss';

import DefaultLayout from '@/components/layouts/default-layouts';

export default function UnprotectedLayout({ children }: Props) {
    return (
        <DefaultLayout>{children}</DefaultLayout>
    );
}

type Props = {
    children: React.ReactNode;
};
