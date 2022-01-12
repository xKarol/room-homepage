import { useContext } from "react";
import Photo from "../Photo";
import AboutContext from "../../context/AboutContext";

export default function About() {
  const { aboutData } = useContext(AboutContext);

  return (
    <article className="h-[900px] md:h-[250px] w-full flex flex-col md:flex-row overflow-hidden">
      {aboutData?.attributes?.image && (
        <section className="flex-1 w-full h-full">
          <Photo
            src={aboutData?.attributes?.image}
            className={"w-full h-full"}
            alt="black chairs"
          />
        </section>
      )}
      <section className="p-10 md:px-10 md:py-0 flex items-center justify-center md:flex-[1.25]">
        <div className="space-y-3">
          <h1 className="uppercase font-bold text-[14px]">
            {aboutData?.attributes?.title}
          </h1>
          <p className="text-darkGray">{aboutData?.attributes?.description}</p>
        </div>
      </section>
      {aboutData?.attributes?.secondImage && (
        <section className="flex-1">
          <Photo
            src={aboutData?.attributes?.secondImage}
            className={"w-full h-full"}
            alt="white chair"
          />
        </section>
      )}
    </article>
  );
}
