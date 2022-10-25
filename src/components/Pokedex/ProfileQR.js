import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import config from '../../../config';

const ProfileQR = ({profile}) => {
  const uri = `${config.prefixes[0]}${
    config.SCREENS.TITLE_SCREEN.NewProfileScreen
  }/${true}/${profile.id}/${profile.name}/${profile.isGirl}/${profile.age}/${
    profile.region
  }/${profile.badges}`;
  return <QRCode size={200} value={uri} />;
};

export default ProfileQR;
