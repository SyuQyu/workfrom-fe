'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";

export default function BackgroundBlogCard() {
    return (
        <Card
            shadow={false}
            className="relative grid h-full w-full items-start justify-start overflow-hidden text-left"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-10 px-4 md:px-8">
                <Button className="bg-gold-500 text-black mb-44" size="sm">
                    LIHAT SEMUA
                </Button>
                <Typography
                    variant="h3"
                    color="white"
                    className="mb-2 font-medium leading-[1.5]"
                >
                    How we design and code open-source projects?
                </Typography>
                <div className="flex flex-row justify-start items-center gap-4">
                    <Avatar
                        size="md"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <div className="flex flex-col justify-between items-start">
                        <Typography variant="h6" className="text-left text-white">
                            By Atalya
                        </Typography>
                        <Typography variant="paragraph" className="text-left text-white">
                            05 Oct 2023
                        </Typography>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}