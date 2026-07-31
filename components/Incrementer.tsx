import {useState, useEffect} from 'react'

export const Incrementer = () => {

  const [counter, setCounter] = useState<number>(0);

  const incrementar: React.MouseEventHandler<HTMLButtonElement> = () => {   
    setCounter(prev => prev + 1);
  };

  useEffect(() => {
    console.log("Counter changed:", counter);
  }, [counter]);

  return <div>
    <div className="flex flex-col items-center justify-center py-4">
        <div>
            <p className="font-bold py-4">{counter}</p>
        </div>

        <div>
            <button
                className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                onClick={incrementar}
            >
            Incrementar
            </button>
        </div>
    </div>
  </div>
}
