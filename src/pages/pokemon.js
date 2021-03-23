import React from "react";
import SinglePokemonHeader from "../components/SinglePokemonHeader";
import SinglePokemonImage from "../components/SinglePokemonImage";
import styles from "../styles/pokemon.module.css";

export default function pokemon({ pokemon }) {
  return (
    <div className={styles.container}>
      <SinglePokemonHeader pokemon={pokemon}></SinglePokemonHeader>
      <SinglePokemonImage
        imagePokemon={pokemon.image}
        namePokemon={pokemon.name}
      ></SinglePokemonImage>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const id = query.id;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    pokemon.image = image;

    return {
      props: { pokemon },
    };
  } catch (error) {
    console.log(err);
  }
};
