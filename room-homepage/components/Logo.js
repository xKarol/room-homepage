import Image from "next/image";
import Link from "next/link";
import LogoSrc from "../assets/svg/logo.svg";

export default function Logo({ className }) {
  return (
    <Link href="/">
      <a className={`relative ${className} select-none`}>
        <Image
          src={LogoSrc}
          alt="room homepage"
          layout="fill"
          objectFit="contain"
        />
      </a>
    </Link>
  );
}
