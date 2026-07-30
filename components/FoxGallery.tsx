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

    return  <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
            <RandomFox key={index} image={image} />
        ))}
        </div>
}
