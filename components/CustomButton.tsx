import {JSX} from 'react';
import {useState} from 'react';

type Props = {myText: string}

export const CustomButton = ({ myText }: Props): JSX.Element => {
  
  const [buttonState, setButtonState] = useState(false);
    
  return <div>
    <button 
      className="text-white bg-blue-700"
      onClick={() => (setButtonState(!buttonState))}
    >
      {myText}
    </button>

    <p>
      {buttonState ? "clicked" : "to click"}
    </p>
  </div>  
}
