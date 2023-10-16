'use client'

import { Button, Typography } from "@material-tailwind/react";
import { AccordionComponent, Card, Card2, CarouselComponent, ImageWithFallback, InputWithButton, SimpleCard, Tabs } from "@/components/common";

import { images } from '@/contants/imageHome'
import { data1, data2 } from '@/contants/tipeSpace'
import { HorizontalScroll, TestimonialCard } from "@/components/common";
import { dataBuilding } from '@/contants/buildingOwner'
import { dataReviewOwnerBuilding } from '@/contants/reviewOwnerBuilding'
export default function Page() {

    return (
        <>
            <div className="h-[120vh]">
                <div className="absolute top-0 bg-[#212121] h-[100vh] w-full flex flex-col items-center">
                    <div className="flex justify-between gap-8 h-full items-center px-24 py-10">
                        <div className="text-white flex w-1/2 flex-col items-start justify-start">
                            <Typography variant="h5" className="mb-3">
                                Office & Coworking Space
                            </Typography>
                            <Typography variant="h1">
                                Temukan Ruangan untuk
                            </Typography>
                            <Typography variant="h1" className="mb-3 text-gold-500">
                                Setiap Pekerjaan
                            </Typography>
                            <Typography variant="h5" className="font-normal text-left">
                                Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda, kami akan membantu Anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda. Temukan ruangan kerja Anda sekarang dan tingkatkan produktivitas kerja Anda!
                            </Typography>
                            <Button className="mt-6 bg-gold-500 text-black w-[30%]" fullWidth>
                                Book Sekarang
                            </Button>
                        </div>
                        <div className="flex items-end justify-end h-full">
                            <ImageWithFallback
                                priority={true}
                                width={0}
                                height={0}
                                sizes='20vw'
                                className='w-full rounded-lg object-contain' src='/images/bisnis.png' alt="" />
                        </div>
                    </div>
                    <div className="absolute -bottom-[180px] bg-white w-[70%] shadow-lg rounded-lg flex items-center justify-between p-10">
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <ImageWithFallback
                                priority={true}
                                width={0}
                                height={0}
                                className='w-1/3 rounded-lg object-contain h-32' src='/images/TotalSales.png' alt="" />
                            <Typography variant="h5" className="text-center">
                                Meningkatkan daya tarik kemitraanmu!
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <ImageWithFallback
                                priority={true}
                                width={0}
                                height={0}
                                className='w-1/3 rounded-lg object-contain h-32' src='/images/MoneyBag.png' alt="" />
                            <Typography variant="h5" className="text-center">
                                Usahamu jadi makin untung
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <ImageWithFallback
                                priority={true}
                                width={0}
                                height={0}
                                className='w-1/3 rounded-lg object-contain h-32' src='/images/ThumbsUp.png' alt="" />
                            <Typography variant="h5" className="text-center">
                                Jadi Gedung Pilihan Customer
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="px-16 w-full flex flex-col items-start justify-start">
                    <Typography variant="h2">
                        Kisah <span className="text-gold-500">Sukses</span> Pemilik Gedung
                    </Typography>
                    <HorizontalScroll className="w-full gap-24 py-10">
                        {
                            dataReviewOwnerBuilding.map((item, index) => (
                                <TestimonialCard key={index} name={item.name} gedung={item.gedung} stars={item.stars} review={item.review} className="custom-card"/>
                            ))
                        }
                    </HorizontalScroll>
                </div>
            </div>
            <div className="bg-[#212121] text-white px-16">
                <div className="mt-20 flex flex-row items-center w-full justify-between gap-24">
                    <div className="w-1/2">
                        <ImageWithFallback
                            priority={true}
                            width={0}
                            height={0}

                            className='w-full rounded-lg object-cover' src='/images/mockup.png' alt="" />
                    </div>
                    <div className="w-1/2 ml-10">
                        <Typography variant="h2" className="text-left">
                            Jangkau Lebih Banyak
                        </Typography>
                        <Typography variant="h2" className="text-left">
                            <span className="text-gold-500">Penyewa</span> Di Berbagai
                        </Typography>
                        <Typography variant="h2" className="text-left">
                            Halaman Strategis
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="my-20 text-center grid grid-cols-3 gap-20 px-16">
                {
                    dataBuilding.map((item, index) => (
                        <SimpleCard key={index} title={item.title} content={item.content} image={item.url} />
                    ))
                }
            </div>
            <div className="bg-[#212121] text-white px-16 py-20">
                <div className="flex justify-between gap-8 items-center">
                    <Typography variant="h1">
                        Frequently Asked Questions
                    </Typography>
                    <div>
                        <AccordionComponent />
                    </div>
                </div>
            </div>
        </>
    );
}
