import axios from 'axios';

export const getAllPokemons = () => {
  return new Promise((resolve, reject) => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_POKEMON_URL}pokemon?limit=999`)
    .then((data) => resolve(data))
    .catch((error) => reject(error));
  });
};

//requisição dinâmica
export const getPokemonsByUrl = (url: string) => {
  return new Promise((resolve, reject) => {
    !url && reject('url não existente ou em branco!');
    return axios.get(url)
    .then((data) => resolve(data))
    .catch((error) => reject(error));
  });
};
