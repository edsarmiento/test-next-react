import {JSX} from 'react';

type Props = {
  myText: string;
  onClick: () => void; // solo pasas la función para cambiar estado
};

export const CustomButton = ({ myText, onClick }: Props): JSX.Element => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded"
        onClick={onClick}
      >
        {myText}
    </button>
    </div>
  );
};
