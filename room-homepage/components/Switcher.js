import { useContext } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import HeroContext from "../context/HeroContext";

export default function Switcher() {
  const { data, heroId, setHeroId } = useContext(HeroContext);

  const handleNextHero = () => {
    if (heroId >= data?.length - 1) setHeroId(0);
    else setHeroId(heroId + 1);
  };

  const handlePrevHero = () => {
    if (heroId <= 0) setHeroId(data?.length - 1);
    else setHeroId(heroId - 1);
  };
  
  return (
    <div className="absolute right-0 bottom-0 h-[50px] md:-right-[100px] flex text-white text-xl items-center justify-center">
      <button
        className="flex justify-center items-center cursor-pointer transition-colors bg-black h-full w-[50px] hover:opacity-75"
        onClick={handlePrevHero}
      >
        <BsChevronLeft />
      </button>
      <button
        className="flex justify-center items-center cursor-pointer transition-colors bg-black h-full w-[50px] hover:opacity-75"
        onClick={handleNextHero}
      >
        <BsChevronRight />
      </button>
    </div>
  );
}
