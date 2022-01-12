import { useEffect, useContext, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import HeroContext from "../../context/HeroContext";

export default function Switcher() {
  const { heroData, heroId, setHeroId } = useContext(HeroContext);
  const nextBtnRef = useRef(null);

  const handleNextHero = () => {
    if (heroId >= heroData?.length - 1) setHeroId(0);
    else setHeroId(heroId + 1);
  };

  const handlePrevHero = () => {
    if (heroId <= 0) setHeroId(heroData?.length - 1);
    else setHeroId(heroId - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => nextBtnRef.current.click(), 1000 * 20);
    return () => clearInterval(timer);
  }, [heroId]); //dependency to reset timer

  return (
    <div className="z-50 absolute right-0 bottom-0 h-[50px] md:-right-[100px] flex text-white text-xl items-center justify-center">
      <button
        className="flex justify-center items-center cursor-pointer transition-colors bg-black h-full w-[50px] hover:opacity-75"
        onClick={handlePrevHero}
      >
        <BsChevronLeft />
      </button>
      <button
        className="flex justify-center items-center cursor-pointer transition-colors bg-black h-full w-[50px] hover:opacity-75"
        onClick={handleNextHero}
        ref={nextBtnRef}
      >
        <BsChevronRight />
      </button>
    </div>
  );
}
