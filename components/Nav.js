import Link from "next/link";

export default function Nav({ active }) {
  return (
    <>
      <nav
        className={`${
          active
            ? "font-bold py-10 fixed top-0 left-0 bg-white w-full shadow-[0_0_0_1000000px_rgba(0,0,0,0.5)]"
            : "hidden md:block text-white"
        } pl-20`}
      >
        <ul className="flex space-x-[25px] lowercase">
          <Link href="/">
            <a className="relative after:pointer-events-none after:transition-opacity after:opacity-0 hover:after:opacity-100 after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-[3px] after:bg-white">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="relative after:pointer-events-none after:transition-opacity after:opacity-0 hover:after:opacity-100 after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-[3px] after:bg-white">
              Shop
            </a>
          </Link>
          <Link href="/">
            <a className="relative after:pointer-events-none after:transition-opacity after:opacity-0 hover:after:opacity-100 after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-[3px] after:bg-white">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="relative after:pointer-events-none after:transition-opacity after:opacity-0 hover:after:opacity-100 after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-[3px] after:bg-white">
              Contact
            </a>
          </Link>
        </ul>
      </nav>
    </>
  );
}
