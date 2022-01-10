import { CgArrowLongRight } from "react-icons/cg";
import Photo from "./Photo";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Hero1 from "../assets/images/desktop-image-hero-1.jpg";

export default function Hero() {
  return (
    <section className="h-[500px] w-full flex flex-col md:flex-row">
      <div className="md:flex-[2] w-full h-full">
        <Photo src={Hero1} className={"w-full h-full"} alt="room photo">
          <div className="absolute right-0 bottom-0 bg-black h-[50px] w-[100px] md:-right-[100px] flex space-x-5 text-veryDarkGray text-xl items-center justify-center">
            <BsChevronLeft />
            <BsChevronRight />
          </div>
        </Photo>
      </div>
      <section className="p-10 flex justify-center items-center md:flex-1">
        <div>
          <h1 className="text-2xl font-bold text-[14px] tracking-tighter mb-3">
            Discover innovative ways to decorate
          </h1>
          <p className="text-darkGray">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="uppercase font-semibold tracking-[10px] mt-5 md:mt-none flex items-center space-x-10">
            <p>Shop Now</p>
            <CgArrowLongRight className="text-xl" />
          </button>
        </div>
      </section>
    </section>
  );
}
