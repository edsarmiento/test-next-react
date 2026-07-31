"use client";

import { useState } from 'react';
import { FoxGallery } from '../components/FoxGallery'
import { CustomButton } from '../components/CustomButton'
import { MyCounterComponent } from '../components/MyCounterComponent'

export default function Home() {
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [imageCount, setImageCount] = useState<number>(4);

  return (
    <div>
      <main className="flex min-h-screen items-center justify-center">        
        <div>
       <MyCounterComponent/>

          <div className="flex items-center justify-center pb-8">

            <CustomButton
              myText="-"
              onClick={() => {
                setImageCount(prev => prev >= 1 ? prev - 1 : 0);
            }}
            /> 

            <CustomButton
              myText={buttonState ? "images refreshed!" : "refresh images!" }
              onClick={() => {
                setButtonState(!buttonState);
                setImageCount(prev => 4);
            }}
            />

            <CustomButton
              myText="+"
              onClick={() => {
                setImageCount(prev => prev + 1);
            }}
            />

          </div>

          <div>
            <FoxGallery imageCount={imageCount} />
          </div>
        </div>
      </main>
    </div>
  );
}
