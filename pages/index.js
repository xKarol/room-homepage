import Home from "../components/Home";

export default function HomePage({ data }) {
  return <Home data={data} />;
}

export async function getStaticProps() {
  const heroResponse = await fetch(
    `${process.env.BACKEND_URL}/api/heroes?populate=image`
  );
  const heroData = await heroResponse.json();
  const hero = heroData.data.map((hero) => ({
    id: hero.id,
    heading: hero.attributes.title,
    body: hero.attributes.description,
    image: `${process.env.BACKEND_URL}${hero.attributes.image.data.attributes.url}`,
  }));

  const aboutResponse = await fetch(
    `${process.env.BACKEND_URL}/api/about?populate=images`
  );
  const aboutData = await aboutResponse.json();
  const about = {
    heading: aboutData.data.attributes.title,
    body: aboutData.data.attributes.description,
    images: aboutData.data.attributes.images.data.map(
      (image) => `${process.env.BACKEND_URL}${image.attributes.url}`
    ),
  };

  return {
    props: {
      data: { heroData: hero, aboutData: about },
    },
  };
}
