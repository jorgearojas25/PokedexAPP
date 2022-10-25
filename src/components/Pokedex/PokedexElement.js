import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Pokedex from '../../sources';
import styles from '../../styles';
import {zfill} from '../../sources/utils';
import {useOrientation} from '../../hooks/useOrientation';

const PokedexElement = ({item, index, setPokemonInfo}) => {
  const orientation = useOrientation();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    async function getPokemonData() {
      const data = await Pokedex.getPokemonByNameOrId(item.entry_number);
      setPokemon(data);
    }
    getPokemonData();
  }, [item.entry_number]);

  const setPokemonDisplay = () => {
    setPokemonInfo(pokemon);
  };

  return (
    <Pressable onPress={() => setPokemonDisplay()}>
      <View
        style={
          orientation === 'LANDSCAPE'
            ? styles.components.PokedexElementWrapperLand
            : styles.components.PokedexElementWrapper
        }>
        <View style={styles.components.PokedexElementImageContent}>
          <Image
            style={styles.components.PokedexSpriteView}
            source={{uri: pokemon?.sprites?.front_default}}
          />
          <Text style={styles.theme.fonts.font16White}>
            No. {zfill(pokemon?.id, 3)}
          </Text>
        </View>
        <View
          style={styles.components.createTriangle(
            70,
            50,
            styles.theme.palette.Jet,
            270,
            -11,
          )}
        />
        <Text style={styles.theme.fonts.font16}>{pokemon?.name}</Text>
      </View>
    </Pressable>
  );
};

export default PokedexElement;
