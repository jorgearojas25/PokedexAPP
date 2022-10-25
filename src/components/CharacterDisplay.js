import React from 'react';
import {View, Text, Image} from 'react-native';
import {useOrientation} from '../hooks/useOrientation';
import styles from '../styles';

const CharacterDisplay = ({
  imgSrc,
  imageStyles,
  isPokedexView,
  optionalDialogue,
}) => {
  const orientation = useOrientation();
  return (
    <View
      style={
        orientation === 'LANDSCAPE'
          ? {width: '50%', justifyContent: 'center', alignItems: 'center'}
          : styles.layout.fullCenter
      }>
      {isPokedexView ? (
        <Text>Pokemon</Text>
      ) : (
        <>
          <Image
            style={
              orientation === 'LANDSCAPE'
                ? styles.components.characterImageLand
                : styles.components.characterImage
            }
            source={{uri: imgSrc}}
          />
          <Text
            style={
              orientation === 'LANDSCAPE'
                ? styles.theme.fonts.fontBoxLand
                : styles.theme.fonts.fontBox
            }>
            {optionalDialogue}
          </Text>
        </>
      )}
    </View>
  );
};

export default CharacterDisplay;
