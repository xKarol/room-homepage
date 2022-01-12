import { useContext } from "react";
import Photo from "../Photo";
import Switcher from "./Switcher";
import HeroContext from "../../context/HeroContext";

export default function ImageFade() {
  const { data, heroId } = useContext(HeroContext);
  return (
    <div className="md:flex-[2] w-full h-full relative">
      {data.map((element, index) => (
        <div
          key={element?.id}
          className={`absolute w-full h-full transition-opacity delay-75 duration-[1.5s] opacity-0 ${
            heroId === index && "opacity-100"
          }`}
        >
          <Photo
            src={element?.attributes?.img}
            className={"w-full h-full"}
            alt="room photo"
          />
        </div>
      ))}
      <Switcher />
    </div>
  );
}
