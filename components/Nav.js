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
            <a className="underlineStroke">Home</a>
          </Link>
          <Link href="/">
            <a className="underlineStroke">Shop</a>
          </Link>
          <Link href="/">
            <a className="underlineStroke">About</a>
          </Link>
          <Link href="/">
            <a className="underlineStroke">Contact</a>
          </Link>
        </ul>
      </nav>
    </>
  );
}
