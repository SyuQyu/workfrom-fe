'use client'
import { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { HiEye } from "react-icons/hi2";
import Link from 'next/link';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            // Redirect to dashboard or home page
        } else {
            // Handle error
        }
    };

    return (
        <div
            className="absolute top-0 left-0 right-0 overflow-hidden bg-cover bg-no-repeat p-12 text-center"
            style={{ height: '100vh', backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/bg.png)` }}>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed ">
                <div className="flex h-full items-center justify-center">
                    <Card color="transparent" shadow={false} className='bg-gray-900 p-5 text-white text-left'>
                        <Typography variant="h3">
                            Login
                        </Typography>
                        <form className="mt-8 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Email" color='white' />
                                <Input type="password" size="lg" label="Password" color='white' icon={<HiEye className='text-white' />} />
                            </div>
                            <Typography
                                variant="small"
                                className="flex items-center font-normal text-gray-400 mb-2"
                            >
                                Lupa Password?
                            </Typography>
                            <Button className="mt-6 bg-gold-500 text-black" fullWidth>
                                Login
                            </Button>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        className="flex items-center font-normal text-gray-400"
                                    >
                                        Remember me
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Typography color="white" className="mt-4 text-left font-normal">
                                Belum memiliki akun?{" "}
                                <Link href="/register" className="font-bold text-gold-500">
                                    Register
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
