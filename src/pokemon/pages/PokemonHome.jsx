import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { pokeService } from "../../service/pokemon.service";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await pokeService.get(
          `/pokemon-species?limit=${limit}&offset=${offset}`
        );
        setPokemons(data);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [offset]);

  if (loading) return <Loading />;

  if (error) return <h1 style={{ color: "red" }}>Error: {error}</h1>;

  return (
    <main className="pokemon-main">
      <div className="pokemons-container">
        {pokemons?.results?.length > 0 &&
          pokemons?.results?.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
      </div>
      <Pagination
        totalPage={pokemons?.count}
        setOffset={setOffset}
        next={pokemons?.next}
        prev={pokemons?.previous}
      />
    </main>
  );
};

export default Pokemons;
