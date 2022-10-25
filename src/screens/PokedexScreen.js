import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import config from '../../config';
import {useSelector} from 'react-redux';
import PokedexDisplay from '../components/Pokedex/PokedexDisplay';
import PokedexList from '../components/Pokedex/PokedexList';
import styles from '../styles';
import PokedexStats from '../components/Pokedex/PokedexStats';
import {useOrientation} from '../hooks/useOrientation';

const PokedexScreen = () => {
  const orientation = useOrientation();
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState('');
  const [showStats, setShowStats] = useState(false);
  const pokemon = useSelector((state) => state?.pokemon);

  useEffect(() => {
    setPokemonList([...pokemon]);
  }, [pokemon]);

  const toggle = () => {
    setShowStats(!showStats);
  };

  return (
    <ImageBackground
      style={
        orientation === 'LANDSCAPE'
          ? {flexDirection: 'row', flex: 1}
          : styles.layout.fullFlex
      }
      source={{
        uri: config.BACKGROUNDS_IMAGES.PokedexPortrait,
      }}>
      {pokemonInfo ? (
        <PokedexDisplay pokemonInfo={pokemonInfo} setShowStats={toggle} />
      ) : (
        <View
          style={
            orientation === 'LANDSCAPE'
              ? styles.layout.customWidth('50%')
              : styles.states.inactiveDisplay
          }
        />
      )}

      <View
        style={
          orientation === 'LANDSCAPE'
            ? styles.layout.pokedexListLand
            : styles.layout.pokedexListPortrait
        }>
        {showStats ? (
          <PokedexStats pokemonInfo={pokemonInfo} />
        ) : (
          <PokedexList pokeList={pokemonList} setPokemonInfo={setPokemonInfo} />
        )}
      </View>
    </ImageBackground>
  );
};

export default PokedexScreen;
