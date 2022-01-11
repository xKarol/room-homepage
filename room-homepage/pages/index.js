import { useState } from "react";
import Head from "next/head";
import Home from "../components/Home";
import HeroContext from "../context/HeroContext";

export default function HomePage({ data: { data } }) {
  const [heroId, setHeroId] = useState(0);
  return (
    <>
      <Head>
        <title>Room homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroContext.Provider value={{ data, heroId, setHeroId }}>
        <Home />
      </HeroContext.Provider>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/api/heroes");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
