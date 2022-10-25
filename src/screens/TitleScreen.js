import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import config from '../../config';
import ProfileSelection from '../components/ProfileSelection';
import EmptyProfile from '../components/EmptyProfile';
import AsyncStorage from '../store/AsyncStorage';
import {useDispatch} from 'react-redux';
import {GetPokedex} from '../store/Redux/ducks/pokemon';
import {useOrientation} from '../hooks/useOrientation';

const TitleScreen = ({route, navigation}) => {
  const [profiles, setProfiles] = useState([]);
  const [profilesStorage, setProfilesStorage] = useState([]);
  const dispatch = useDispatch();
  const orientation = useOrientation();
  useEffect(() => {
    async function LoadData() {
      dispatch(GetPokedex());
    }
    LoadData();
  }, [dispatch]);

  useEffect(() => {
    async function readStorageProfiles() {
      const asProfiles = await AsyncStorage.getData(config.AS_KEYS.PROFILES);
      if (asProfiles !== null) {
        setProfilesStorage(asProfiles);
      }
    }
    const unsubscribe = navigation.addListener('focus', () => {
      readStorageProfiles();
    });

    return unsubscribe;
  }, [navigation, profilesStorage]);

  useEffect(() => {
    const actualProfiles = Array(config.NUMBER_ACCOUNTS)
      .fill()
      .map((profile, index) => {
        return profilesStorage[index] !== undefined ? (
          <ProfileSelection
            profilesStorage={profilesStorage}
            setProfileStorage={setProfilesStorage}
            height={orientation === 'LANDSCAPE' ? '80%' : '30%'}
            width={orientation === 'LANDSCAPE' ? '30%' : '80%'}
            key={index}
            profile={profilesStorage[index]}
            isCreation={false}
          />
        ) : (
          <EmptyProfile key={`Empty-space-${index}`} />
        );
      });
    setProfiles(actualProfiles);
  }, [profilesStorage, orientation]);

  return (
    <>
      <View
        style={
          orientation === 'LANDSCAPE'
            ? styles.layout.columnJustifiedLand
            : styles.layout.columnJustified
        }>
        {console.warn(orientation)}
        {profiles}
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate(config.SCREENS.TITLE_SCREEN.QRScanScreen)
        }
        style={styles.components.floatButton}>
        <Icon
          name="md-qr-code-sharp"
          size={28}
          color={styles.theme.palette.Gainsboro}
        />
      </Pressable>
    </>
  );
};
export default TitleScreen;
