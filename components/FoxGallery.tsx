import { JSX } from "react";
import { RandomFox } from "../components/RandomFox"
import { useState, useEffect } from 'react'

type Props = {
    imageCount?: number;
}

export const FoxGallery = ({imageCount = 4}: Props): JSX.Element => {
    const [images, setImages] = useState<string[]>([]);

    const generateImages = () =>
            Array(imageCount).fill(null).map(() =>
                `https://randomfox.ca/images/${Math.floor(Math.random() * 123) + 1}.jpg`
            );

    useEffect(() => {
        setImages(generateImages());
    }, [imageCount]);

    return <div className="flex mb-4">
                    {images.map((image, index) => (
                        <div key={index} className="w-full bg-gray-500 h-12">
                            <RandomFox image={image} />
                        </div>
                     ))}                
            </div>
}
