import React from "react";
import Link from "next/link";
import styles from "../styles/SinglePokemonHeader.module.css";

export default function SinglePokemonHeader({ pokemon }) {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndTypes}>
        <Link href="/">
          <a>
            <img src="/back.svg" alt="Voltar" />
          </a>
        </Link>

        <h1>{pokemon.name}</h1>
        <div className={styles.types}>
          {pokemon.types.map((type, index) => (
            <span key={index}>{type.type.name}</span>
          ))}
        </div>
      </div>

      <div className={styles.pokemonNumber}>
        <h1>#{pokemon.order}</h1>
      </div>
    </div>
  );
}
