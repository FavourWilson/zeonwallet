// components/WalkthroughCard.tsx
import React from 'react';
import Imagesize from '../atoms/Imagesize';

interface WalkthroughCardProps {
    image: {
        width: number;
        height: number;
        value: string;
        src: string;
    };
    title: string;
    subtitle: string;
}

const WalkthroughCard: React.FC<WalkthroughCardProps> = ({ image, title, subtitle }) => {
    return (
        <div className="w-full sm:w-[250px] flex flex-col items-center justify-between">
            <Imagesize {...image} />
            <h2 className="text-white font-bold text-lg text-center">{title}</h2>
            <p className="text-gray-300 text-sm text-center mt-2">{subtitle}</p>
        </div>

    );
};

export default WalkthroughCard;
