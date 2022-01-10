import { CgArrowLongRight } from "react-icons/cg";

export default function Hero() {
  return (
    <section className="w-full px-10 py-[70px]">
      <h1 className="text-2xl font-bold text-[14px] tracking-tighter mb-3">
        Discover innovative ways to decorate
      </h1>
      <p className="text-darkGray">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <div className="uppercase font-semibold tracking-[10px] mt-10 flex items-center space-x-10">
        <p>Shop Now</p>
        <CgArrowLongRight className="text-xl" />
      </div>
    </section>
  );
}
