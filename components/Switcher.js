import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Switcher() {
  return (
    <div className="absolute right-0 bottom-0 bg-black h-[50px] w-[100px] md:-right-[100px] flex space-x-5 text-white text-xl items-center justify-center">
      <BsChevronLeft className="cursor-pointer transition-colors hover:text-veryDarkGray"/>
      <BsChevronRight className="cursor-pointer transition-colors hover:text-veryDarkGray"/>
    </div>
  );
}
