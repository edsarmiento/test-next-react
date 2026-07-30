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
          <div className="flex items-center justify-center pb-8">
            <CustomButton
              myText={buttonState ? "you clicked!" : "click me!"}
              onClick={() => {
                setButtonState(!buttonState);
                setImagesKey(prev => prev + 1);
            }}
          />  
          </div>
          <div className="flex justify-center items-center">
            <FoxGallery key={imagesKey} />
          </div>
        </div>
      </main>
    </div>
  );
}
