import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import PokedexElement from './PokedexElement';
import styles from '../../styles';
import {useOrientation} from '../../hooks/useOrientation';

const PokedexList = ({pokeList, setPokemonInfo}) => {
  const orientation = useOrientation();
  const renderItem = ({item, index}) => {
    return (
      <PokedexElement item={item} key={index} setPokemonInfo={setPokemonInfo} />
    );
  };
  return (
    <View style={styles.layout.pokedexContainer}>
      <FlatList
        data={pokeList}
        renderItem={renderItem}
        keyExtractor={(item) => item.entry_number}
      />
    </View>
  );
};

export default PokedexList;
