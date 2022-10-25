import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../../../styles';
import Pokedex from '../../../sources';

const Others = ({pokemonInfo, pokemonSpecie, index, actualRender}) => {
  const [pokemonAbility, setPokemonAbility] = useState({});

  useEffect(() => {
    Pokedex.getAbilityByName(
      pokemonInfo.abilities[0].ability.name,
    ).then((response) => setPokemonAbility(response));
  }, [pokemonInfo]);
  if (index === actualRender) {
    return (
      <ScrollView>
        <View style={styles.components.pokedexContainer()}>
          <Text
            style={[
              styles.theme.fonts.basicFont,
              {paddingHorizontal: 15, marginBottom: 20},
            ]}>
            {pokemonInfo.abilities[0].ability.name}:{' '}
            {pokemonAbility.effect_entries !== undefined
              ? pokemonAbility.effect_entries[0].effect
              : ''}
          </Text>
          <View style={styles.layout.rowContainer}>
            <View style={styles.layout.columnJustified}>
              <Text style={styles.theme.fonts.basicFont}>Normal</Text>
              <Image
                style={styles.components.PokedexSpriteDetailView}
                source={{uri: pokemonInfo.sprites.front_default}}
              />
              <Image
                style={styles.components.PokedexSpriteDetailView}
                source={{uri: pokemonInfo.sprites.back_default}}
              />
            </View>
            <View style={styles.layout.columnJustified}>
              <Text style={styles.theme.fonts.basicFont}>Shiny</Text>
              <Image
                style={styles.components.PokedexSpriteDetailView}
                source={{uri: pokemonInfo.sprites.front_shiny}}
              />
              <Image
                style={styles.components.PokedexSpriteDetailView}
                source={{uri: pokemonInfo.sprites.back_shiny}}
              />
            </View>
          </View>
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

export default Others;
