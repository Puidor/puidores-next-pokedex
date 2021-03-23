import HeaderPokedex from "../components/HeaderPokedex";
import SmallCardPokemon from "../components/SmallCardPokemon";

export default function Home({ pokemons }) {
  return (
    <div>
      <HeaderPokedex title="Next | Pokedex"></HeaderPokedex>

      <SmallCardPokemon pokemons={pokemons}></SmallCardPokemon>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await response.json();

    const pokemons = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

      return {
        ...result,
        image,
      };
    });

    return {
      props: { pokemons },
    };
  } catch (error) {
    console.log(error);
  }
};
