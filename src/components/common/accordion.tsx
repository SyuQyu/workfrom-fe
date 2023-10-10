import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function AccordionComponent() {
    const [open, setOpen] = React.useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={alwaysOpen}>
                <AccordionHeader className="text-gold-600 hover:text-gold-500" onClick={handleAlwaysOpen}>Apa itu Workfrom?</AccordionHeader>
                <AccordionBody className="text-white">
                    Workfrom merupakan sebuah platform yang menghubungkan penyewa dengan ruang kantor yang tepat di mana saja di berbagai lokasi. Kami dapat membantu menemukan kebutuhan penyewa dan pemilik gedung.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 1}>
                <AccordionHeader className="text-gold-600 hover:text-gold-500" onClick={() => handleOpen(1)}>
                    Fasilitas apa saja yang ditawarkan?
                </AccordionHeader>
                <AccordionBody className="text-white">
                    Workfrom merupakan sebuah platform yang menghubungkan penyewa dengan ruang kantor yang tepat di mana saja di berbagai lokasi. Kami dapat membantu menemukan kebutuhan penyewa dan pemilik gedung.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader className="text-gold-600 hover:text-gold-500" onClick={() => handleOpen(2)}>
                    Apakah buka di akhir pekan dan hari libur?
                </AccordionHeader>
                <AccordionBody className="text-white">
                    Workfrom merupakan sebuah platform yang menghubungkan penyewa dengan ruang kantor yang tepat di mana saja di berbagai lokasi. Kami dapat membantu menemukan kebutuhan penyewa dan pemilik gedung.
                </AccordionBody>
            </Accordion>
        </>
    );
}