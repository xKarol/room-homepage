import { useState } from "react";
import Head from "next/head";
import Home from "../components/Home";
import HeroContext from "../context/HeroContext";
import AboutContext from "../context/AboutContext";

export default function HomePage({ heroData, aboutData }) {
  const [heroId, setHeroId] = useState(0);

  return (
    <>
      <Head>
        <title>Room homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroContext.Provider value={{ heroData, heroId, setHeroId }}>
        <AboutContext.Provider value={{ aboutData }}>
          <Home />
        </AboutContext.Provider>
      </HeroContext.Provider>
    </>
  );
}

export async function getServerSideProps() {
  const heroResponse = await fetch("http://localhost:1337/api/heroes");
  const heroData = await heroResponse.json();
  const aboutResponse = await fetch("http://localhost:1337/api/abouts/1");
  const aboutData = await aboutResponse.json();
  return {
    props: {
      heroData: heroData.data,
      aboutData: aboutData.data,
    },
  };
}
