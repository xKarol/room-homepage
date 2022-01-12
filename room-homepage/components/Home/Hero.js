import { useContext } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import HeroContext from "../../context/HeroContext";
import ImageFade from "./ImageFade";

export default function Hero() {
  const { heroData, heroId } = useContext(HeroContext);

  return (
    <article className="w-full flex flex-col md:flex-row overflow-hidden">
      <ImageFade />
      <section className="p-10 md:px-[80px] md:py-0 flex justify-center items-center md:flex-1">
        <div>
          <h1 className="text-[28px] leading-[1] font-bold tracking-tighter mb-5">
            {heroData[heroId]?.attributes?.title}
          </h1>
          <p className="text-darkGray">
            {heroData[heroId]?.attributes?.description}
          </p>
          <button className="transition-opacity hover:opacity-50 uppercase font-semibold tracking-[10px] mt-5 md:mt-none flex items-center space-x-10">
            <p>Shop Now</p>
            <CgArrowLongRight className="text-xl" />
          </button>
        </div>
      </section>
    </article>
  );
}
