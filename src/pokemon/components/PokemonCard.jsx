import { Link } from "react-router-dom";
import { getPokemonId } from "../../utils/getPokeId";

const PokemonCard = ({ name, url }) => {
  const pokeId = getPokemonId(url);
  return (
    <div className="pokemon-card">
      <Link to={`/pokemons/${pokeId}`}>
        <img
          src="https://external-preview.redd.it/e5zoQw-hgw-LCjdhC_4G8IAcHxex5pzda_BD_FPTcBY.png?auto=webp&s=c0b96b5ec20010a15864b8a0c9b202c119e52fe8"
          alt={name}
        />
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default PokemonCard;
