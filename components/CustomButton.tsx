import {JSX} from 'react';

type Props = {
  myText: string;
  onClick: () => void; // solo pasas la función para cambiar estado
};

export const CustomButton = ({ myText, onClick }: Props): JSX.Element => {
  return (
    <div>
      <button
        className="text-white bg-blue-700"
        onClick={onClick}
      >
        {myText}
    </button>
    </div>
  );
};
