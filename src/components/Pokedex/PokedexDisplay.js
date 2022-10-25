import React, {useState, useEffect} from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {useOrientation} from '../../hooks/useOrientation';
import styles from '../../styles';

const PokedexDisplay = ({pokemonInfo, setShowStats}) => {
  const orientation = useOrientation();
  useEffect(() => {
    try {
      SoundPlayer.loadUrl(
        `https://play.pokemonshowdown.com/audio/cries/${pokemonInfo.name}.mp3`,
      );
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }, [pokemonInfo]);

  const reproduceCry = () => {
    try {
      SoundPlayer.play();
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  return (
    <View
      style={
        orientation === 'LANDSCAPE'
          ? {
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
            }
          : styles.layout.fullCenter
      }>
      <Pressable
        onPress={() => {
          reproduceCry();
        }}>
        <Image
          style={styles.components.pokemonArtImage}
          source={{
            uri: pokemonInfo.sprites.other['official-artwork'].front_default,
          }}
        />
      </Pressable>
      <View style={styles.layout.rowWrapCenter}>
        <Text style={styles.theme.fonts.titleFont}>
          {pokemonInfo?.name.toUpperCase()}
        </Text>
        <Pressable onPress={() => setShowStats(true)}>
          <Text>stats</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PokedexDisplay;
