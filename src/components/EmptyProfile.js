import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import config from '../../config';
import {useOrientation} from '../hooks/useOrientation';

const EmptyProfile = () => {
  const orientation = useOrientation();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.components.profileBlock,
        styles.layout.customWidth(orientation === 'LANDSCAPE' ? '30%' : '80%'),
        styles.layout.customHeight(orientation === 'LANDSCAPE' ? '80%' : '30%'),
      ]}>
      <Pressable
        style={styles.layout.centeredView}
        onPress={() =>
          navigation.navigate(config.SCREENS.TITLE_SCREEN.NewProfileScreen)
        }>
        <Icon name="pluscircle" size={30} color={styles.theme.palette.Jet} />
        <Text style={styles.theme.fonts.basicFont}>Add new profile!</Text>
      </Pressable>
    </View>
  );
};

export default EmptyProfile;
