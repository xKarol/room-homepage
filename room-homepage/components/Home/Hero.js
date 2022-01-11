import { useContext } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import Photo from "../Photo";
import Switcher from "../Switcher";
import Hero1 from "../../assets/images/desktop-image-hero-1.jpg";
import HeroContext from "../../context/HeroContext";

export default function Hero() {
  const { data, heroId } = useContext(HeroContext);
  return (
    <section className="h-[700px] md:h-[500px] w-full flex flex-col md:flex-row">
      <div className="md:flex-[2] w-full h-full">
        <Photo src={Hero1} className={"w-full h-full"} alt="room photo">
          <Switcher />
        </Photo>
      </div>
      <section className="p-10 flex justify-center items-center md:flex-1">
        <div>
          <h1 className="text-2xl font-bold text-[14px] tracking-tighter mb-3">
            {data[heroId]?.attributes?.title}
          </h1>
          <p className="text-darkGray">
            {data[heroId]?.attributes?.description}
          </p>
          <button className="transition-opacity hover:opacity-50 uppercase font-semibold tracking-[10px] mt-5 md:mt-none flex items-center space-x-10">
            <p>Shop Now</p>
            <CgArrowLongRight className="text-xl" />
          </button>
        </div>
      </section>
    </section>
  );
}
