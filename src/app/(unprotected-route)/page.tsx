'use client'

import { Button, Typography } from "@material-tailwind/react";
import { Card, Card2, CarouselComponent, ImageWithFallback, Tabs } from "@/components/common";
export const metadata = {
    title: 'Peluang.co',
    description: 'test description',
};

import { images } from '@/contants/imageHome'
import { data1, data2 } from '@/contants/tipeSpace'
export default function Page() {

    return (
        <>
            <div className="h-[93vh]">
                <CarouselComponent data={images} />
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-[80%]">
                    <Tabs />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-24 mb-32">
                <Typography variant="h2" className="text-center">
                    Partner Kami
                </Typography>
                <ImageWithFallback
                    priority={true}
                    width={0}
                    height={0}
                    sizes='10vw'
                    className='w-1/2 rounded-lg object-contain' src='/images/partner.png' alt="" />
            </div>
            <div className="bg-[#212121] text-white px-16">
                <div className="mt-20 flex flex-col items-center">
                    <div>
                        <Typography variant="h2" className="text-center">
                            Sesuaikan dengan
                        </Typography>
                        <Typography variant="h2" className="text-center text-gold-500">
                            Kebutuhan
                        </Typography>
                    </div>
                    <div className="mt-14 flex gap-4 justify-between">
                        {
                            data1.map((item: any, index: number) =>
                                <Card data={item} key={index} />
                            )
                        }
                    </div>
                    <Button className="mt-14 bg-gold-500 text-black w-[20%]" fullWidth>
                        Book Sekarang
                    </Button>
                    <div className="mt-16">
                        <Typography variant="h2" className="text-center">
                            Pilih <span className="text-gold-500 italic">Space</span>
                        </Typography>
                        <Typography variant="h2" className="text-center text-white">
                            Terdekat
                        </Typography>
                    </div>
                    <div className="mt-14 flex gap-24 justify-between w-[75%]">
                        {
                            data2.map((item: any, index: number) =>
                                <Card2 data={item} key={index} />
                            )
                        }
                    </div>
                    <Button className="my-20 bg-gold-500 text-black w-[20%]" fullWidth>
                        Jelajahi semua lokasi
                    </Button>
                </div>
            </div>
        </>
    );
}
