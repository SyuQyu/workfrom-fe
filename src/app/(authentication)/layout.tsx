
export default function AuthLayout({ children }: Props) {
    return (
        <body>
            {children}
        </body>
    );
}

type Props = {
    children: React.ReactNode;
};
