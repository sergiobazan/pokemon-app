import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeService } from "../../service/pokemon.service";
import { Loading } from "../../components/Loading";

const PokemonDetail = () => {
  const { pokeId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await pokeService.get(`/pokemon/${pokeId}`);
        setPokemon(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;

  if (error) return <h1 style={{ color: "red" }}>Error: {error}</h1>;

  return (
    <main className="pokemon-detail-page">
      <div className="pokemon-detail">
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
        <img src={pokemon?.sprites?.back_default} alt={pokemon?.name} />
        <div className="pokemon-info">
          <h2>Orden: {pokemon?.order}</h2>
          <h2>
            Abilities:
            {pokemon?.abilities.map((ability) => (
              <span> {ability?.ability?.name}</span>
            ))}
          </h2>
          <h2>
            Types:
            {pokemon?.types?.map((type) => (
              <span key={type.type.name}> {type?.type?.name}</span>
            ))}
          </h2>
          <h2>Height: {pokemon?.height}</h2>
          <h2>Weight: {pokemon?.weight}</h2>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetail;
