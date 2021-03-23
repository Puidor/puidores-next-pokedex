import React from "react";
import Link from "next/link";
import styles from "../styles/SmallCardPokemon.module.css";

export default function SmallCardPokemon({ pokemons }) {
  return (
    <div className={styles.container}>
      <h1>
        <span>Next</span> Pokedex
      </h1>
      <ul className={styles.pokemonsList}>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a>
                <div className={styles.pokemonsNames}>{pokemon.name}</div>
                <div className={styles.pokemonsImages}>
                  <img src={pokemon.image} alt={pokemon.name} />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
