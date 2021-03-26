import React from "react";
import styles from "../styles/SinglePokemonDescription.module.css";

export default function SinglePokemonDescription({
  heightPokemon,
  weightPokemon,
  abilitiesPokemon,
}) {
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <div className={styles.pokemonDescription}>
        <p>
          <span>Height:</span> {heightPokemon}
        </p>
        <p>
          <span>Weight:</span> {weightPokemon}
        </p>
        <p>
          <span>Abilities</span>{" "}
          {abilitiesPokemon.map((ability, index) => (
            <p key={index}>{ability.ability.name} </p>
          ))}
        </p>
      </div>
    </div>
  );
}
