import { Carousel, Typography, Button } from "@material-tailwind/react";
import { ImageWithFallback } from "@/components/common";
export default function CarouselWithContent({ data }: props) {
    return (
        <Carousel className="max-h-screen absolute top-0">
            {
                data.map((item: any, index: number) =>
                    <div className="relative h-full w-full" key={index}>
                        <ImageWithFallback
                            src={item.url}
                            alt={item.name}
                            className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="flex h-full items-center justify-center">
                                <div className="text-white w-[40%] flex flex-col items-center justify-center">
                                    <Typography variant="h5" className="mb-3">
                                        Office & Coworking Space
                                    </Typography>
                                    <Typography variant="h1">
                                        Temukan Ruangan untuk
                                    </Typography>
                                    <Typography variant="h1" className="mb-3 text-gold-500">
                                        Setiap Pekerjaan
                                    </Typography>
                                    <Typography variant="h5" className="font-normal text-center">
                                        Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda, kami akan membantu Anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda. Temukan ruangan kerja Anda sekarang dan tingkatkan produktivitas kerja Anda!
                                    </Typography>
                                    <Button className="mt-6 bg-gold-500 text-black w-[30%]" fullWidth>
                                        Book Sekarang
                                    </Button>
                                </div>
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
};