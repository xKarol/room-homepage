import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Switcher() {
  return (
    <div className="absolute right-0 bottom-0 h-[50px] md:-right-[100px] flex text-white text-xl items-center justify-center">
      <button className="flex justify-center items-center cursor-pointer transition-colors bg-black h-full w-[50px] hover:opacity-75">
        <BsChevronLeft />
      </button>
      <button className="flex justify-center items-center cursor-pointer transition-colors bg-black h-full w-[50px] hover:opacity-75">
        <BsChevronRight />
      </button>
    </div>
  );
}
