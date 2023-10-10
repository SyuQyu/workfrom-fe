import { ImageWithFallback } from "@/components/common";
import { Typography } from "@material-tailwind/react";
import clsx from "clsx";

const LINKS = [
    {
        title: "Location",
        items: ["Clapham", "The 101", "Yafurni", "Kalingga"],
    },
    {
        title: "Use Case",
        items: ["Event", "Meeting", "Photo Shoot", "Office"],
    },
    {
        title: "Company",
        items: ["Contact Us", "Blog"],
    },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks({ className }: Props) {
    return (
        <footer id='footer' className={clsx('footer', className)}>
            <div className="mx-auto w-full px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <div className="">
                        <ImageWithFallback
                            priority={true}
                            width={0}
                            height={0}
                            sizes='10vw'
                            className='w-1/4 rounded-lg object-contain' src='/images/LogoWFYellow.png' alt="" />
                        <Typography className="mb-6 text-gray-400 mt-4 w-[40%]">
                            Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd Floor, Gang Buntu, Medan Timur, Medan City, North Sumatra 20231
                        </Typography>
                        <Typography className="mb-6 text-gray-300 mt-4 w-[40%]">
                            (+6261) 805 109 77
                        </Typography>
                    </div>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    className="mb-3 font-normal text-white"
                                >
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            className="py-1.5 font-normal transition-colors text-gray-400 hover:text-gold-500"
                                        >
                                            {link}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col items-end justify-end py-4 md:flex-row md:justify-end">
                    <Typography
                        variant="small"
                        className="mb-4 text-right font-normal text-gray-400 md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
                        Rights Reserved.
                    </Typography>
                </div>
            </div>
        </footer>
    );
}
type Props = {
    className?: string;
};