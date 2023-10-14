import axios from "axios";

export const pokeService = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
