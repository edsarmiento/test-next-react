import {RandomFox} from '../components/RandomFox';

let randomId = Math.floor(Math.random() * 123) + 1;



export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Tailwind is working!
        </h1>
        
        <div>
          <RandomFox image={`https://randomfox.ca/images/${randomId}.jpg`}  />
        </div>
      </main>
    </div>
  );
}
