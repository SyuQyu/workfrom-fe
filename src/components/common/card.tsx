import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { type } from "os";
import ImageWithFallback from "./imageWithFallback";
import clsx from "clsx";

export default function ProfileCard({ data }: props) {
    return (
        <Card className={clsx("w-96 ", data?.color ? "bg-gray-600 border-2 border-yellow-500" : "bg-gray-800")}>
            <CardHeader floated={false} className="h-80 m-8 mb-0">
                <ImageWithFallback
                    src={data?.url!}
                    alt={data?.name!}
                    className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody className="text-left text-white">
                <Typography variant="h4" className="mb-2 text-gold-500">
                    {data?.type}
                </Typography>
                <Typography className="font-normal text-white" textGradient>
                    {data?.desc}
                </Typography>
            </CardBody>
        </Card>
    );
}

type props = {
    data?: {
        color?: string;
        name?: string;
        url?: any;
        type?: string;
        desc?: string;
    }
};