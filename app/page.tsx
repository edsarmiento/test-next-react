"use client";

import { useState } from 'react';
import { FoxGallery } from '../components/FoxGallery'
import { CustomButton } from '../components/CustomButton'

export default function Home() {
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [imagesKey, setImagesKey] = useState(0);

  return (
    <div>
      <main className="flex min-h-screen items-center justify-center">        
        <div>
          <h1 className="text-5xl font-bold text-blue-600">
            Tailwind is working!
          </h1>
          <FoxGallery key={imagesKey} />
          <CustomButton
            myText={buttonState ? "you clicked!" : "click me!"}
            onClick={() => {
              setButtonState(!buttonState);
              setImagesKey(prev => prev + 1);
            }}
          />
        </div>
      </main>
    </div>
  );
}

