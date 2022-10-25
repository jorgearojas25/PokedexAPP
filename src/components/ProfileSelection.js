import React, {useState, useEffect} from 'react';
import {View, Text, Image, Modal, Pressable, Alert} from 'react-native';
import styles from '../styles';
import config from '../../config';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '../store/AsyncStorage';

const ProfileSelection = ({
  profile,
  width = '80%',
  height = '30%',
  profilesStorage,
  setProfileStorage,
  isCreation,
  ...props
}) => {
  const [badges, setBadges] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const profileBadges = config.REGIONS.filter(
      (region) => region.name === profile.region,
    )[0]?.badges.slice(0, Number(profile.badges));
    setBadges(profileBadges);
  }, [profile]);

  const deleteProfile = async () => {
    await AsyncStorage.storeData(
      config.AS_KEYS.PROFILES,
      profilesStorage.filter((prof) => prof.id !== profile.id),
    );
    const updatedStorage = await AsyncStorage.getData(config.AS_KEYS.PROFILES);
    if (updatedStorage !== null) {
      setProfileStorage(updatedStorage);
    }
    setShowModal(false);
    navigation.navigate(config.SCREENS.TITLE_SCREEN.TitleScreen);
  };

  return (
    <>
      <Pressable
        style={[
          styles.components.profileBlock,
          styles.layout.customWidth(width),
          styles.layout.customHeight(height),
        ]}
        onPress={() => (isCreation ? null : setShowModal(true))}>
        <View style={styles.layout.profileData}>
          <Image
            style={styles.components.profileImage}
            source={{
              uri: profile.isGirl
                ? config.CHARACTERS_IMAGES.girl
                : config.CHARACTERS_IMAGES.boy,
            }}
          />
          <View style={styles.layout.profileInfo}>
            <Text style={styles.theme.fonts.basicFont}>
              Name: {profile.name}
            </Text>
            <Text style={styles.theme.fonts.basicFont}>Age: {profile.age}</Text>
            <Text style={styles.theme.fonts.basicFont}>
              Region: {profile.region}
            </Text>
          </View>
        </View>
        <View style={styles.layout.profileBadges}>
          {badges?.length > 0
            ? badges.map((badge, index) => {
                return (
                  <Image
                    key={index}
                    style={styles.components.badgeImage}
                    source={{uri: badge}}
                  />
                );
              })
            : null}
        </View>
      </Pressable>
      <Modal
        animationType={'slide'}
        transparent={true}
        key={profile.id}
        visible={showModal}>
        <View style={styles.layout.modalWrapper}>
          <View style={styles.layout.modalContent}>
            <Pressable onPress={() => setShowModal(false)}>
              <Text>❌</Text>
            </Pressable>
            <Text style={styles.theme.fonts.titleFont}>{profile.name}</Text>
            <Image
              style={styles.components.profileCharacter}
              source={{
                uri: profile.isGirl
                  ? config.CHARACTERS_IMAGES.girl
                  : config.CHARACTERS_IMAGES.boy,
              }}
            />
            <View style={[styles.layout.rowWrapCenter, {paddingTop: 15}]}>
              <Pressable
                style={styles.components.createButton(
                  styles.theme.palette.BottleGreen,
                )}
                onPress={() => {
                  navigation.navigate(
                    config.SCREENS.TITLE_SCREEN.MainScreen,
                    profile,
                  );
                  setShowModal(false);
                }}>
                <Text style={styles.theme.fonts.basicFontWhite}>Go!</Text>
              </Pressable>
              <Pressable
                style={styles.components.createButton(
                  styles.theme.palette.RedRYB,
                )}
                onPress={() => {
                  Alert.alert(
                    'Are you sure?',
                    "You can't recover this profile latter",
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: async () => await deleteProfile()},
                    ],
                    {cancelable: false},
                  );
                }}>
                <Text style={styles.theme.fonts.basicFontWhite}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProfileSelection;
