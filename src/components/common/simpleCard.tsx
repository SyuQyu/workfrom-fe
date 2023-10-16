import React from 'react';
import ImageWithFallback from './imageWithFallback';
import { Typography } from '@material-tailwind/react';

interface SimpleCardProps {
    image?: any;
    title?: any;
    content?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({image, title, content }) => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center shadow-md rounded-lg p-10">
            <ImageWithFallback
                priority={true}
                width={0}
                height={0}
                className='w-1/3 rounded-lg object-contain h-32' src={image} alt={title} />
            <Typography variant="h3" className="text-center">
                {title}
            </Typography>
            <Typography variant="h5" className="text-center text-normal">
                {content}
            </Typography>
        </div>
    );
};

export default SimpleCard;
