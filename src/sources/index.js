import Pokedex from 'pokedex-promise-v2';
import config from '../../config';

const P = new Pokedex(config.PokedexApi);

const getEvolutionChainById = async (id) => {
  try {
    const data = await P.getEvolutionChainById(id);
    console.log(data);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

const getPokedexByName = async (region) => {
  try {
    const data = await P.getPokedexByName(region);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

const getNationalPokedex = async () => {
  return getPokedexByName('national');
};

const getRegionByName = async (region) => {
  try {
    const data = await P.getRegionByName(region);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

const getPokemonByNameOrId = async (nameOrId) => {
  try {
    const data = await P.getPokemonByName(nameOrId);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

const getPokemonSpeciesByNameOrId = async (nameOrId) => {
  try {
    const data = await P.getPokemonSpeciesByName(nameOrId);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

const getAbilityByName = async (nameOrId) => {
  try {
    const data = await P.getAbilityByName(nameOrId);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

const getMoveByName = async (nameOrId) => {
  try {
    const data = await P.getMoveByName(nameOrId);
    return data;
  } catch (err) {
    console.error(`[Pokedex sources] ${err}`);
  }
};

export default {
  getEvolutionChainById,
  getPokedexByName,
  getNationalPokedex,
  getRegionByName,
  getPokemonByNameOrId,
  getPokemonSpeciesByNameOrId,
  getAbilityByName,
  getMoveByName,
};
