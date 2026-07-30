import { JSX } from "react";
import { RandomFox } from "../components/RandomFox"
import { useState, useEffect } from 'react'

export const FoxGallery = (): JSX.Element => {

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const generateImages = () =>
            Array(4).fill(null).map(() =>
                `https://randomfox.ca/images/${Math.floor(Math.random() * 123) + 1}.jpg`
            );

        setImages(generateImages());
    }, []);

    return <div className="flex mb-4">
                    {images.map((image, index) => (
                        <div key={index} className="w-full bg-gray-500 h-12">
                            <RandomFox image={image} />
                        </div>
                     ))}                
            </div>
}
