'use client'
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Breadcrumbs, CardSpace, InputWithButton, MultiRangeSlider, Select } from '@/components/common';
import { optionUseCase } from '@/contants/optionSpace'
import { data } from '@/contants/dataBuilding'
const MapPage = () => {
    const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // default center of San Francisco
    const [zoom, setZoom] = useState(10); // default zoom level
    useEffect(() => {
        console.log(data);
    }, []);
    const dataBreadCrumbs: any = [
        {
            name: 'Spaces',
            link: 'spaces'
        }
    ]
    return (
        <div className='mx-5'>
            <Breadcrumbs data={dataBreadCrumbs} />
            <div className='flex flex-col gap-5'>
                <InputWithButton label='Cari' textColor='white' className='bg-gray-800 mt-3' buttonName='Cari' buttonStyle='bg-gold-500 text-black' />
                <div className='flex justify-start gap-4'>
                    <Select option={optionUseCase} className='bg-gray-800' labelProps='text-white' menuProps='text-black' selectCustom='text-white' label='Pilih Use Case' />
                    <Select option={optionUseCase} className='bg-gray-800' labelProps='text-white' menuProps='text-black' selectCustom='text-white' label='Pilih Lokasi' />
                    <div className='w-full flex justify-center items-center'>
                        <MultiRangeSlider
                            min={0}
                            max={1000}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <MultiRangeSlider
                            min={0}
                            max={1000}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-start items-center mt-10 gap-10'>
                {
                    data?.map((item: any, index: number) => (
                        <div className='mb-5'>
                            <CardSpace tags={item.tags}
                                text={item.text}
                                rating={item.rating}
                                location={item.location}
                                desc={item.desc}
                                price={item.price} />
                        </div>

                    ))
                }
            </div>
        </div>
        // <div style={{ height: '100vh', width: '100%' }}>
        //     {/* <GoogleMapReact
        //         bootstrapURLKeys={{ key: 'YOUR_API_KEY_HERE' }} 
        //         defaultCenter={center}
        //         defaultZoom={zoom}
        //     >
        //     </GoogleMapReact> */}

        // </div>
    );
};

export default MapPage;
