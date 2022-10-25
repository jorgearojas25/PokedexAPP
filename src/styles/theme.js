import {StyleSheet} from 'react-native';
const palette = {
  BottleGreen: '#0b6e4f',
  ForestGreenCrayola: '#60A561',
  Gainsboro: '#e0e0e2',
  Black: '#000103',
  Jet: '#333138',
  RedRYB: '#ff312e',
};

const pokemonTypes = [
  {
    name: 'normal',
    color: '#B9B6AA',
  },
  {
    name: 'fighting',
    color: '#80331A',
  },
  {
    name: 'flying',
    color: '#90A4F0',
  },
  {
    name: 'poison',
    color: '#8F408E',
  },
  {
    name: 'ground',
    color: '#AA914E',
  },
  {
    name: 'rock',
    color: '#B59D54',
  },
  {
    name: 'bug',
    color: '#9FAE18',
  },
  {
    name: 'ghost',
    color: '#5D5FAE',
  },
  {
    name: 'steel',
    color: '#B2B2C0',
  },
  {
    name: 'fire',
    color: '#E83E0B',
  },
  {
    name: 'water',
    color: '#2283E6',
  },
  {
    name: 'grass',
    color: '#69B037',
  },
  {
    name: 'electric',
    color: '#E69204',
  },
  {
    name: 'psychic',
    color: '#DD3064',
  },
  {
    name: 'ice',
    color: '#6FD5F3',
  },
  {
    name: 'dragon',
    color: '#6D5BCE',
  },
  {
    name: 'dark',
    color: '#3E2D23',
  },
  {
    name: 'fairy',
    color: '#E3A2E2',
  },
  {
    name: 'unknown',
    color: '#1B9784',
  },
  {
    name: 'shadow',
    color: '#6522B5',
  },
];

const fonts = StyleSheet.create({
  basicFont: {fontFamily: 'monospace', color: palette.Black},
  font16: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: palette.Black,
  },
  font16White: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: palette.Gainsboro,
  },
  fontBox: {
    width: '100%',
    height: '18%',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 2,
    borderRadius: 8,
    fontFamily: 'monospace',
  },
  fontBoxLand: {
    width: '100%',
    height: '22%',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 2,
    borderRadius: 8,
    fontFamily: 'monospace',
  },
  basicFontWhite: {fontFamily: 'monospace', color: 'white'},
  titleFont: {
    fontFamily: 'monospace',
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 5,
  },
});

const getTypeByName = (name) => {
  return pokemonTypes.filter((x) => x.name === name)[0];
};

export default {
  palette: palette,
  types: pokemonTypes,
  fonts: fonts,
  getType: getTypeByName,
};
