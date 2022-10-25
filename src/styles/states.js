import {StyleSheet} from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  inactiveDisplay: {height: 220},
  inactiveMovement: {height: '30%'},
  selectedPokemonMove: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: theme.palette.Black,
    backgroundColor: theme.palette.BottleGreen,
    width: '100%',
    height: 40,
    borderRadius: 15,
    paddingLeft: 15,
    marginVertical: 2,
    justifyContent: 'center',
  },
});
