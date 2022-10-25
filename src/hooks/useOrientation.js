import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function useOrientation() {
  const [orientation, setOrientation] = useState('PORTRAIT');

  const actualWidth = Dimensions.get('window').width;
  const actualHeight = Dimensions.get('window').height;

  const compareDimensions = (width = actualWidth, height = actualHeight) => {
    if (width < height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  };

  useEffect(() => {
    compareDimensions();
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      compareDimensions(width, height);
    });
  }, [actualWidth, actualHeight]);

  return orientation;
}
