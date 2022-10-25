import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useOrientation} from '../../../hooks/useOrientation';
import styles from '../../../styles';
import PokemonMove from './PokemonMove';

const Moves = ({pokemonInfo, pokemonSpecie, index, actualRender}) => {
  const orientation = useOrientation();
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [movementInfo, setMovementInfo] = useState(null);
  const [selectedMove, setSelectedMove] = useState(null);

  useEffect(() => {
    const moves = pokemonInfo.moves.slice(0, 4);
    const renderMoves = new Array(moves.length).fill().map((element, i) => {
      return (
        <View style={{width: '90%', marginHorizontal: 5}}>
          <PokemonMove
            key={i}
            indexed={i}
            moveName={moves[i].move.name}
            setMovementInfo={setMovementInfo}
            selectedMove={selectedMove}
            setSelectedMove={setSelectedMove}
            typeSize={12}
          />
        </View>
      );
    });
    setPokemonMoves(renderMoves);
  }, [pokemonInfo.moves, selectedMove]);

  if (index === actualRender) {
    return (
      <ScrollView>
        <View style={styles.components.pokedexContainer()}>
          {movementInfo ? (
            <View style={{height: '30%'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.theme.fonts.basicFont}>
                  Accuracy: {movementInfo.accuracy}
                </Text>
                <Text style={styles.theme.fonts.basicFont}>
                  Power: {movementInfo.power}
                </Text>
                <Text style={styles.theme.fonts.basicFont}>
                  Target: {movementInfo.target.name.replace('-', ' ')}
                </Text>
              </View>
              <ScrollView style={{flex: 1}}>
                <Text style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  {movementInfo.effect_entries[0].effect}
                </Text>
              </ScrollView>
            </View>
          ) : (
            <View style={styles.states.inactiveMovement} />
          )}
          <View style={styles.layout.rowWrapCenter}>{pokemonMoves}</View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <>
        <View />
      </>
    );
  }
};

export default Moves;
