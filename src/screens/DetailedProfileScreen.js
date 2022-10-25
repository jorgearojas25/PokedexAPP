import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import ProfileQR from '../components/Pokedex/ProfileQR';
import ProfileSelection from '../components/ProfileSelection';
import {useOrientation} from '../hooks/useOrientation';

const DetailedProfileScreen = ({profile}) => {
  const orientation = useOrientation();
  return (
    <View style={orientation === 'LANDSCAPE' ? {flexDirection: 'row'} : {}}>
      <View>
        <ProfileSelection
          profile={profile}
          width={orientation === 'LANDSCAPE' ? '70%' : '100%'}
          height={orientation === 'LANDSCAPE' ? '100%' : '70%'}
          isCreation={true}
        />
      </View>

      <View
        style={
          orientation === 'LANDSCAPE'
            ? {justifyContent: 'center'}
            : {flex: 1, alignItems: 'center', justifyContent: 'center'}
        }>
        <ProfileQR profile={profile} />
      </View>
    </View>
  );
};

export default DetailedProfileScreen;
