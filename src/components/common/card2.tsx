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
import ImageWithFallback from "./imageWithFallback";
import { HiMapPin } from "react-icons/hi2";
import { type } from "os";
export default function BookingCard({ data }: props) {
    return (
        <Card className="w-full flex flex-col shadow-lg items-center justify-center">
            <CardBody className="flex flex-col-reverse lg:flex-row-reverse">
                <div className="lg:w-1/2 flex items-center justify-center">
                    <ImageWithFallback src={data?.url!} alt={data?.name!} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-4 justify-evenly items-start lg:w-1/2">
                    <Typography color="black" variant="h3">
                        {data?.title}
                    </Typography>
                    <Typography color="blue-gray">
                        {data?.address}
                    </Typography>
                    <Typography color="black" className="font-bold mt-auto flex gap-2">
                        <HiMapPin className="m-auto" /> {data?.loc}
                    </Typography>
                    <div className="flex-grow"></div>
                    <Typography color="black" className="font-bold">
                        Lihat &gt;
                    </Typography>
                </div>
            </CardBody>
        </Card>

    );
}

type props = {
    data: {
        name?: string;
        url?: string;
        title?: string;
        address?: string;
        loc?: string;
    }
}