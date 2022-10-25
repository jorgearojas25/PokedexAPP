import Pokedex from '../../../sources';
export const GET_POKEDEX = 'AwesomePokedex/pokemon/GET_POKEDEX';
export const GET_TEAM = 'AwesomePokedex/pokemon/GET_TEAM';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_POKEDEX:
      return action.payload;
    case GET_TEAM:
      return state;
    default:
      return state;
  }
}

async function getPokemonData(id) {
  const data = await Pokedex.getPokemonByNameOrId(id);
  return data;
}

export const GetPokedex = () => (dispatch) => {
  Pokedex.getNationalPokedex()
    .then((data) => data.pokemon_entries)
    .then((data) => dispatch({type: GET_POKEDEX, payload: data}));
};
