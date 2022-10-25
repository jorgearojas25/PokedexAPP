import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../../styles';
import Pokedex from '../../../sources';
import TypeText from './TypeText';

const PokemonMove = ({
  indexed,
  moveName,
  setMovementInfo,
  setSelectedMove,
  selectedMove,
  typeSize = 16,
}) => {
  const [pokemonMove, setPokemonMove] = useState(null);
  useEffect(() => {
    async function getData() {
      Pokedex.getMoveByName(moveName).then((response) =>
        setPokemonMove(response),
      );
    }
    getData();
  }, [moveName]);
  if (pokemonMove) {
    return (
      <Pressable
        onPress={() => {
          setMovementInfo(pokemonMove);
          setSelectedMove(indexed);
        }}>
        <View
          style={
            selectedMove === indexed
              ? styles.states.selectedPokemonMove
              : styles.components.pokemonMove
          }>
          <View style={{width: '50%'}}>
            <Text
              style={
                selectedMove === indexed
                  ? styles.theme.fonts.basicFontWhite
                  : styles.theme.fonts.basicFont
              }>
              {pokemonMove.name}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              width: '45%',
            }}>
            <TypeText size={typeSize} type={pokemonMove.type.name} />
            <Text
              style={
                selectedMove === indexed
                  ? styles.theme.fonts.basicFontWhite
                  : styles.theme.fonts.basicFont
              }>
              {pokemonMove.pp}/{pokemonMove.pp}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  } else {
    return <View />;
  }
};

export default PokemonMove;
