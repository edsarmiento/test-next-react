"use client";

import { useState } from 'react';
import { FoxGallery } from '../components/FoxGallery'
import { CustomButton } from '../components/CustomButton'

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [buttonState, setButtonState] = useState<boolean>(false);

  const generateNewImages = () => 
    Array(4).fill(null).map(() =>
      `https://randomfox.ca/images/${Math.floor(Math.random() * 123) + 1}.jpg`
    );


  const handleButtonClick = () => {
    setButtonState(!buttonState);
    setImages(generateNewImages());
  };

  return (
    <div>
      <main className="flex min-h-screen items-center justify-center">        
        <div>
          <h1 className="text-5xl font-bold text-blue-600">
            Tailwind is working!
          </h1>
          <FoxGallery images={images} />
          <CustomButton
            myText={buttonState ? "you clicked!" : "click me!"}
            onClick={handleButtonClick}
          />
        </div>
      </main>
    </div>
  );
}
