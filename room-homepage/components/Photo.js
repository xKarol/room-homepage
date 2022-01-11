import Image from "next/image";

export default function Photo({ src, className, alt, children }) {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
      {children}
    </div>
  );
}
