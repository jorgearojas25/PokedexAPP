import React from 'react';
import {Image, ScrollView} from 'react-native';
import styles from '../styles';
import config from '../../config';

const MapsScreen = () => {
  return (
    <ScrollView horizontal={true} style={styles.layout.fullFlex}>
      <Image
        style={styles.components.mapImage}
        source={{
          uri: config.BACKGROUNDS_IMAGES.MapImage,
        }}
      />
    </ScrollView>
  );
};

export default MapsScreen;
