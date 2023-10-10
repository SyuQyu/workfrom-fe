import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    Button,
} from "@material-tailwind/react";
import clsx from "clsx";
import { useState } from "react";
import { ImageWithFallback } from "@/components/common";
export default function TabsCustomAnimation() {
    const [selectedTab, setSelectedTab] = useState("sebagai-pelanggan");
    const data = [
        {
            label: "Sebagai Pelanggan",
            value: "sebagai-pelanggan",
            desc: (
                <div className="flex flex-row gap-10 my-12 relative">
                    <div className="bg-yellow-500 absolute rounded-xl -z-10 -top-8 left-44 w-[400px] h-[400px]"></div>
                    <div className=" flex justify-end">
                        <ImageWithFallback
                            priority={true}
                            width={0}
                            height={0}
                            sizes='10vw'
                            className='w-4/6 rounded-lg object-contain' src='/images/pic1.png' alt="" />
                    </div>
                    <div className=" text-black flex flex-col justify-center gap-4">
                        <Typography variant="h2" className="w-[80%]">
                            <span className="text-gold-500">Space Terbaik</span> untuk Semua Tim dan Pekerjaan Anda
                        </Typography>
                        <Typography variant="h5" className="font-normal">
                            Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda, kami akan membantu Anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda. Temukan ruangan kerja Anda sekarang dan tingkatkan produktivitas kerja Anda!
                        </Typography>
                        <Button className="mt-6 bg-gold-500 text-black w-[30%]" fullWidth>
                            Book Sekarang
                        </Button>
                    </div>
                </div>
            ),
        },
        {
            label: "Sebagai Pemilik",
            value: "sebagai-pemilik",
            desc: (
                <div className="flex flex-row gap-10 my-12 relative">
                    <div className="bg-yellow-500 absolute rounded-xl -z-10 -top-8 left-44 w-[400px] h-[400px]"></div>
                    <div className=" flex justify-end">
                        <ImageWithFallback
                            priority={true}
                            width={0}
                            height={0}
                            sizes='10vw'
                            className='w-4/6 rounded-lg object-contain' src='/images/pic1.png' alt="" />
                    </div>
                    <div className=" text-black flex flex-col justify-center gap-4">
                        <Typography variant="h2" className="w-[80%]">
                            <span className="text-gold-500">Space Terbaik</span> untuk Semua Tim dan Pekerjaan Anda
                        </Typography>
                        <Typography variant="h5" className="font-normal">
                            Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda, kami akan membantu Anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda. Temukan ruangan kerja Anda sekarang dan tingkatkan produktivitas kerja Anda!
                        </Typography>
                        <Button className="mt-6 bg-gold-500 text-black w-[30%]" fullWidth>
                            Book Sekarang
                        </Button>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <Tabs id="custom-animation" value="sebagai-pelanggan">
            <TabsHeader className="bg-[#BDBDBD] w-[40%] mx-auto p-3"
                indicatorProps={{
                    className: "bg-gold-500 text-black",
                    style: { color: "text-black", background: "bg-red-900" },
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setSelectedTab(value)}
                        className={clsx("font-semibold drop-shadow-lg bg-[#212121] rounded-lg ", selectedTab === value ? 'text-black' : 'text-white')}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}