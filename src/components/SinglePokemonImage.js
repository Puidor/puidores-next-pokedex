import React from "react";
import styles from "../styles/SinglePokemonImage.module.css";

export default function SinglePokemonImage({ imagePokemon, namePokemon }) {
  return (
    <div className={styles.container}>
      <img src={imagePokemon} alt={namePokemon} />
    </div>
  );
}
