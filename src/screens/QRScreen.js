import React from 'react';
import {Text, Pressable, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from '../styles';
import {useOrientation} from '../hooks/useOrientation';

const QRScreen = ({navigation}) => {
  const orientation = useOrientation();
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.theme.fonts.titleFont}>Someone is coming?</Text>
      }
      bottomContent={
        <Pressable
          onPress={() => navigation.goBack()}
          style={[
            styles.components.createButton(styles.theme.palette.RedRYB),
            {marginTop: 30},
          ]}>
          <Text style={styles.theme.fonts.basicFontWhite}>Cancel</Text>
        </Pressable>
      }
    />
  );
};

export default QRScreen;
