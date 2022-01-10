import Image from "next/image";

export default function Photo({ src, className, alt }) {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />;
    </div>
  );
}
