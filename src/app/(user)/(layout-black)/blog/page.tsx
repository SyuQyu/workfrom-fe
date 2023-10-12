'use client'
import { Breadcrumbs, CarouselComponent2, CardImg } from '@/components/common';
import { images } from '@/contants/imageHome';
import { Button, Typography } from '@material-tailwind/react';
import React from 'react';

interface BlogPost {
    title: string;
    content: string;
    author: string;
    date: Date;
}

const BlogPage: React.FC = () => {
    const blogPosts: BlogPost[] = [
        {
            title: 'My First Blog Post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'John Doe',
            date: new Date('2022-01-01'),
        },
        {
            title: 'My Second Blog Post',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Jane Smith',
            date: new Date('2022-01-02'),
        },
    ];
    const data: any = [
        {
            name: 'Blog',
            link: 'blog'
        }
    ]

    return (
        <div className='mx-5'>
            <Breadcrumbs data={data} />
            <div className='flex flex-col justify-center items-center mb-24'>
                <Typography variant="h1" className='text-white'>
                    <span className="text-gold-500">Blog</span> Kami
                </Typography>
                <Typography variant="lead" className='text-white text-center w-1/2'>
                    Kami menawarkan solusi kantor pribadi dan ruang acara yang tidak hanya menyediakan tempat untuk bekerja. Ruang kami juga merupakan tempat untuk terhubung dan berkolaborasi dengan komunitas sejenis.
                </Typography>
            </div>
            <CarouselComponent2 data={images}/>
            <div className='flex mt-10 justify-between items-center gap-6'>
                <CardImg />
                <CardImg />
            </div>
            <div className='flex mt-10 justify-between items-center gap-6'>
                <CardImg />
                <CardImg />
                <CardImg />
            </div>
            <div className='flex justify-center items-center mt-10'>
                <Button className="bg-gold-500 text-black" size="lg">
                    LIHAT SEMUA
                </Button>
            </div>
        </div>
    );
};

export default BlogPage;
