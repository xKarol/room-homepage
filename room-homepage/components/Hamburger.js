export default function Hamburger({ active, onClick }) {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center space-y-1 z-50 cursor-pointer"
      onClick={onClick}
    >
      <span
        className={`bg-white w-5 h-[2px] ${
          active && "bg-darkGray transition-all translate-y-[10px] opacity-0"
        }`}
      />
      <span
        className={`bg-white w-5 h-[2px] transition-transform origin-[7px] ${
          active && "bg-darkGray rotate-45"
        }`}
      />
      <span
        className={`bg-white w-5 h-[2px] transition-transform origin-[5px] ${
          active && "bg-darkGray -rotate-45"
        }`}
      />
    </button>
  );
}
