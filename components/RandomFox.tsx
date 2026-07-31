import { JSX } from "react";


type Props = { image: string }

export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    <img
      src={image}
      alt="Random fox"
      className="w-full h-64 object-cover rounded"
    />
  );
};