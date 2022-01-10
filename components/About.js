import AboutImg from "../assets/images/image-about-dark.jpg";
import Photo from "./Photo";
import AboutLightImg from "../assets/images/image-about-light.jpg";

export default function About() {
  return (
    <section className="h-[800px] md:h-[250px] w-full flex flex-col md:flex-row">
      <div className="flex-1 w-full h-full">
        <Photo src={AboutImg} className={"w-full h-full"} alt="room photo" />
      </div>
      <section className="p-10 flex items-center justify-center flex-[1.25]">
        <div className="space-y-3">
          <h1 className="uppercase font-bold text-[14px]">
            About our furniture
          </h1>
          <p className="text-darkGray">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </section>
      <div className="flex-1">
        <Photo
          src={AboutLightImg}
          className={"w-full h-full"}
          alt="room photo"
        />
      </div>
    </section>
  );
}
