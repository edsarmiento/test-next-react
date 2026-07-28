import { JSX } from "react";
const randomId = Math.floor(Math.random() * 123) + 1;



export const RandomFox = (): JSX.Element  => {
  const image: string = `https://randomfox.ca/images/${randomId}.jpg`;
  return <img
    src={image}
    width={320}
    height="auto"
    className="rounded"
  />;
};