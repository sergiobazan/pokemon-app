import { Route, Routes } from "react-router-dom";
import PokemonHome from "./pokemon/pages/PokemonHome";
import PokemonDetail from "./pokemon/pages/PokemonDetail";
import Header from "./components/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonHome />} />
        <Route path="/pokemons/:pokeId" element={<PokemonDetail />} />
      </Routes>
    </>
  );
}
