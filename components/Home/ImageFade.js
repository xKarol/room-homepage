import { useContext } from "react";
import Photo from "../Photo";
import Switcher from "./Switcher";
import HeroContext from "../../context/HeroContext";

export default function ImageFade() {
  const { heroData, heroId } = useContext(HeroContext);
  return (
    <div className="md:flex-[1.7] w-full h-[350px] md:h-[450px] relative">
      {heroData.map((image, index) => (
        <div
          key={image.id}
          className={`absolute w-full h-full transition-opacity delay-75 duration-[1.5s] opacity-0 ${
            heroId === index && "opacity-100"
          }`}
        >
          <Photo
            src={image.image}
            className={"w-full h-full"}
            alt={heroData.body}
          />
        </div>
      ))}
      <Switcher />
    </div>
  );
}
