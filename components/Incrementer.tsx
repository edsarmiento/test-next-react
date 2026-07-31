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
    <div className="flex items-center justify-center">
    <button
            className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
            onClick={ incrementar }
        >
        incrementar
    </button>

        <p className="font-bold py-4" >{counter}</p>
    </div>
  </div>
}
