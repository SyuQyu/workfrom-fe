import { Carousel, Typography, Button } from "@material-tailwind/react";
import { ImageWithFallback } from "@/components/common";
import clsx from "clsx";
export default function CarouselWithContent({ data, className }: props) {
    return (
        <Carousel className={clsx(className)}>
            {
                data.map((item: any, index: number) =>
                    <div className="h-full w-full" key={index}>
                        <div className="flex flex-wrap items-center justify-center">
                            <ImageWithFallback
                                src={item.url}
                                alt={item.name}
                                width={0}
                                height={0}
                                className="w-1/2 object-cover" />
                            <div className="w-1/2 flex flex-col justify-between gap-5 items-start bg-gray-800 h-full p-8">
                                <Button className="bg-gold-500 text-black" size="sm">
                                    FEATURED
                                </Button>
                                <Typography variant="h4" className="text-white">Diskusi Lebih Nyaman dengan Interior Ruang Rapat Minimalis</Typography>
                                <Typography variant="lead" className="text-white">Optimalkan diskusi dalam rapat dengan desain interior ruang rapat minimalis yang nyaman dan fungsional.</Typography>
                            </div>
                        </div>
                    </div>
                )
            }
        </Carousel>
    );
}

type props = {
    data?: any;
    className?: string;
};