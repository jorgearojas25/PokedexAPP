import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../../../styles';
import TypeText from './TypeText';

const BasicInfo = ({pokemonInfo, pokemonSpecie, index, actualRender}) => {
  if (index === actualRender) {
    return (
      <ScrollView>
        <View style={styles.components.pokedexContainer()}>
          {pokemonSpecie.flavor_text_entries !== undefined ? (
            <Text
              style={[
                styles.theme.fonts.font16,
                {paddingLeft: 10, marginVertical: 15},
              ]}>
              {pokemonSpecie.flavor_text_entries[0].flavor_text.replace(
                /(\r\n|\n|\r)/gm,
                ' ',
              )}
            </Text>
          ) : (
            <View />
          )}
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <Text style={styles.theme.fonts.font16}>Types: </Text>
            {pokemonInfo.types.map((type) => (
              <TypeText type={type.type.name} />
            ))}
          </View>
          <Text style={[styles.theme.fonts.font16, {marginBottom: 15}]}>
            Experience: {pokemonInfo.base_experience}
          </Text>
          <Text style={[styles.theme.fonts.font16, {marginBottom: 15}]}>
            Height: {pokemonInfo.height}
          </Text>
          <Text style={[styles.theme.fonts.font16, {marginBottom: 15}]}>
            Weight: {pokemonInfo.weight}
          </Text>
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

export default BasicInfo;
