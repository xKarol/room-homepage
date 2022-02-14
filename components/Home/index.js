import { useState } from "react";
import AboutContext from "../../context/AboutContext";
import HeroContext from "../../context/HeroContext";
import Header from "../Header";
import About from "./About";
import Hero from "./Hero";

export default function Home({ data: { heroData, aboutData } }) {
  const [heroId, setHeroId] = useState(0);

  return (
    <HeroContext.Provider value={{ heroData, heroId, setHeroId }}>
      <AboutContext.Provider value={{ aboutData }}>
        <Header />
        <Hero />
        <About />
      </AboutContext.Provider>
    </HeroContext.Provider>
  );
}
