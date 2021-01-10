import axios from 'axios';

export const getAllPokemons = () => {
  return new Promise((resolve, reject) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=999')
    .then((data) => resolve(data))
    .catch((error) => reject(error));
  });
};

//requisição dinâmica
export const getPokemonsByUrl = (url) => {
  return new Promise((resolve, reject) => {
    !url && reject('url não existente ou em branco!')
    return axios.get(url)
    .then((data) => resolve(data))
    .catch((error) => reject(error));
  });
};
