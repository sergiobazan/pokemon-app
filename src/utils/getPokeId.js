export const getPokemonId = (url) => {
  const myUrl = new URL(url);
  const pathnameArray = myUrl?.pathname?.split("/");
  return pathnameArray[pathnameArray.length - 2];
};
