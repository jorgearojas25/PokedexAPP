import {StyleSheet} from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  rowContainer: {flexDirection: 'row'},
  rowContainerWrap: {flexDirection: 'row', flexWrap: 'wrap'},
  columnJustified: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  columnJustifiedLand: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileData: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  profileInfo: {paddingLeft: 5},
  profileBadges: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fullCenter: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullFlex: {flex: 1},
  fullFlexLand: {flex: 1, flexDirection: 'row'},
  viewWrapper: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  rowWrapCenter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pokedexListPortrait: {
    paddingBottom: 130,
    paddingTop: 12,
    paddingHorizontal: 10,
    backgroundColor: theme.palette.Jet + '90',
    borderColor: theme.palette.RedRYB,
    borderWidth: 15,
  },
  pokedexListLand: {
    width: '50%',
    paddingBottom: 10,
    paddingTop: 12,
    paddingHorizontal: 10,
    backgroundColor: theme.palette.Jet + '90',
    borderColor: theme.palette.RedRYB,
    borderBottomWidth: 0,
    borderWidth: 15,
  },
  pokedexContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  columnCenter: {alignItems: 'center'},
  customeMarginRight(margin) {
    return {marginRight: margin};
  },
  customeMarginLeft(margin) {
    return {marginLeft: margin};
  },
  customWidth(customW) {
    return {width: customW};
  },
  customHeight(customH) {
    return {height: customH};
  },
});
