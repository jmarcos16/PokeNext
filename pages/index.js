import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "../components/Card";
import Link from "next/link";

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <Link href="/">
          <h1 className={styles.title}>
            Poke<span>Next</span>
          </h1>
        </Link>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // Add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
