"use client";
import {FoxGallery} from '../components/FoxGallery';
import {CustomButton} from '../components/CustomButton';

export default function Home() {
    return(
    <div>
      <main className="flex min-h-screen items-center justify-center">        
        <div>
          <h1 className="text-5xl font-bold text-blue-600">
            Tailwind is working!
          </h1>
          <FoxGallery /> 
          <CustomButton myText={"hola mundo"}></CustomButton>
        </div>
      </main>
    </div>
  );
}
