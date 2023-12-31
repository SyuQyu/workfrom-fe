import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import clsx from "clsx";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function TestimonialCard({ name, gedung, stars, review, className }: props) {
    return (
        <Card color="transparent" shadow={true} className={clsx("w-full max-w-[26rem] p-8 shadow-md", className)}>
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex flex-col items-center gap-4 pt-0 pb-8"
            >
                <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                />
                <div className="flex w-full flex-col items-center justify-center gap-2">
                    <Typography variant="h5" color="blue-gray">
                        {name ? name : "Tania Andrew"}
                    </Typography>
                    <Typography color="blue-gray">{gedung ? gedung : "gedung 01"}</Typography>
                    <div className="5 flex flex-row items-center gap-1">
                        <StarIcon /> {stars ? stars : "4.5"}
                    </div>
                </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
                <Typography variant="h5" className="text-black text-center">
                    &quot;{
                        review ? review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates."
                    }&quot;
                </Typography>
            </CardBody>
        </Card>
    );
}

type props = {
    name?: any;
    gedung?: any;
    stars?: any;
    review?: any;
    className?: string;
}