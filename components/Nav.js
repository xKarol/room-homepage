export default function Nav({ active }) {
  return (
    <>
      {active && (
        <nav className="fixed pl-20 py-10 top-0 left-0 bg-white w-full shadow-[0_0_0_1000000px_rgba(0,0,0,0.5)]">
          <ul className="flex space-x-[25px] font-bold lowercase">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </>
  );
}
