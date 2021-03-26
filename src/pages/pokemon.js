import React from "react";
import SinglePokemonHeader from "../components/SinglePokemonHeader";
import SinglePokemonImage from "../components/SinglePokemonImage";
import HeaderPokedex from "../components/HeaderPokedex";
import styles from "../styles/pokemon.module.css";
import SinglePokemonDescription from "../components/SinglePokemonDescription";

export default function pokemon({ pokemon }) {
  return (
    <>
      <div className={styles.container}>
        <HeaderPokedex title={"Pokemon | " + pokemon.name}></HeaderPokedex>
        <SinglePokemonHeader pokemon={pokemon}></SinglePokemonHeader>
        <SinglePokemonImage
          imagePokemon={pokemon.image}
          namePokemon={pokemon.name}
        ></SinglePokemonImage>
      </div>

      <SinglePokemonDescription
        heightPokemon={pokemon.height}
        weightPokemon={pokemon.weight}
        abilitiesPokemon={pokemon.abilities}
      ></SinglePokemonDescription>
    </>
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
