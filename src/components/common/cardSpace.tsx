import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import clsx from "clsx";
import {
    BuildingOfficeIcon,
    WifiIcon
} from "@heroicons/react/24/solid";
import { use, useEffect } from "react";
import Link from "next/link";
export default function BookingCard({ className, tags, text, rating, location, desc, price, id, colorSettings }: props) {
    useEffect(() => {
    }, []);
    return (
        <Card className="w-full max-w-[26rem] shadow-lg bg-gray-800 border-yellow-500 border">
            <CardHeader floated={false} color="blue-gray">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                {/* <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                    >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </IconButton> */}
            </CardHeader>
            <CardBody className="p-5 flex flex-col gap-3">
                <div className="flex flex-wrap justify-start items-center gap-4">
                    {
                        tags?.map((item: any, index: number) => (
                            <Button className="bg-gold-500 text-black" size="sm" key={index}>
                                {item.name}
                            </Button>
                        ))
                    }
                </div>
                <div className="flex items-center justify-between">
                    <Typography variant="h5" className={clsx("font-semibold", colorSettings?.titleColor ? colorSettings?.titleColor : 'text-gold-500')}>
                        {text ? text : "Gedung 01"}
                    </Typography>
                    <Typography
                        className={clsx("flex items-center gap-1.5 font-normal", colorSettings?.ratingColor ? colorSettings?.ratingColor : 'text-white')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {rating ? rating : "4.5"}
                    </Typography>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                    <BuildingOfficeIcon className="w-8 h-8 text-white" />
                    <Typography className={clsx(colorSettings?.descColor ? colorSettings?.descColor : 'text-white')}>
                        {
                            location ? location : "Hawwaian, USA"
                        }
                    </Typography>
                </div>
                <Typography className={clsx(colorSettings?.descColor ? colorSettings?.descColor : 'text-white')}>
                    {
                        desc ? desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
                    }
                </Typography>
                <div className="group inline-flex flex-wrap items-center gap-3">
                    <Tooltip content="Free Wifi">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-white/10 hover:bg-white/10 hover:!opacity-100 group-hover:opacity-70">
                            <WifiIcon className="w-5 h-5 text-white" />
                        </span>
                    </Tooltip>
                </div>
                <div className="flex items-center justify-between">
                    <Typography className={clsx(colorSettings?.descColor ? colorSettings?.descColor : 'text-white')}>
                        Price
                    </Typography>
                    <Typography className={clsx(colorSettings?.descColor ? colorSettings?.descColor : 'text-white')}>
                        IDR {price ? price : "5.000.000"}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-3">
                <Link href={`/spaces/detail/${id}`}>
                    <Button size="lg" fullWidth={true} className="bg-gold-500 text-black">
                        Lihat Detail
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

type props = {
    className?: string;
    id?:any;
    tags?: any;
    text?: any;
    rating?: any;
    location?: any;
    desc?: any;
    price?: any;
    colorSettings?: {
        ratingColor?: string | 'text-white';
        titleColor?: any | 'text-white';
        descColor?: any | 'text-white';
    }
}