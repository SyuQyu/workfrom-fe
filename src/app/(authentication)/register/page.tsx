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
const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        if (response.ok) {
            // Registration successful, redirect to login page
            window.location.href = '/login';
        } else {
            // Registration failed, display error message
            const data = await response.json();
            alert(data.message);
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
                            Register
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Name" color='white'/>
                                <Input size="lg" label="Email" color='white'/>
                                <Input type="password" size="lg" label="Password" color='white' icon={<HiEye className='text-white' />}/>
                                <Input type="password" size="lg" label="Confirm Password" color='white' icon={<HiEye className='text-white' />}/>
                            </div>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color="white"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-gold-500"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button className="mt-6 bg-gold-500 text-black" fullWidth>
                                Register
                            </Button>
                            <Typography color="white" className="mt-4 text-left font-normal">
                                Already have an account?{" "}
                                <Link href="/login" className="font-bold text-gold-500">
                                    Login
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
