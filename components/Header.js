import { useState, useEffect } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.id === "header-nav") return;
      if (!open) return;
      setOpen(false);
    };
    
    document.body.style.overflow = `${open ? "hidden" : "visible"}`;
    if (open) window.scrollTo(0, 0);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <header className="w-full flex px-10 absolute top-10 z-50 items-center">
      <Hamburger active={open} onClick={() => setOpen(!open)} />
      <div
        className={`flex absolute md:static md:left-0 md:translate-x-0 left-1/2 -translate-x-1/2 ${
          open && "hidden"
        }`}
      >
        <Logo className={"w-[80px] h-[15px]"} />
      </div>
      <Nav active={open} />
    </header>
  );
}
