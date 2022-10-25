import React from 'react';
import {Text} from 'react-native';
import styles from '../../../styles';

const TypeText = ({type, size = 16}) => {
  return (
    <Text
      style={
        ([styles.theme.fonts.font16White],
        {
          backgroundColor: styles.theme.getType(type).color,
          paddingHorizontal: 8,
          paddingVertical: 3,
          borderRadius: 3,
          marginRight: 5,
          color: 'white',
          fontSize: size,
        })
      }>
      {type.toUpperCase()}
    </Text>
  );
};

export default TypeText;
