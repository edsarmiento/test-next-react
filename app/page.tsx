"use client";

import {useState, useEffect} from 'react'
import {RandomFox} from '../components/RandomFox';

export default function Home() {

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const generateImages = () =>
      Array(4).fill(null).map(() => 
        `https://randomfox.ca/images/${Math.floor(Math.random() * 123) + 1}.jpg`
      );
    
    setImages(generateImages());
  }, []);

    return(
    <div>
      <main className="flex min-h-screen items-center justify-center">

        <h1 className="text-5xl font-bold text-blue-600">
          Tailwind is working!
        </h1>
        
        <div>
          {images.map((image, index) => (
            <div key={index} className="p-4">
              <RandomFox image={image} />
            </div>
          ))}
        </div>
          
      </main>
    </div>
  );
}
