import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import CharacterDisplay from '../components/CharacterDisplay';
import NewProfile from '../components/NewProfile';
import styles from '../styles';
import config from '../../config';
import ProfileSelection from '../components/ProfileSelection';
import {v4 as uuidv4} from 'uuid';
import AsyncStorage from '../store/AsyncStorage';
import {useOrientation} from '../hooks/useOrientation';

const NewProfileScreen = ({route, navigation}) => {
  const orientation = useOrientation();
  const [dialogueInstruction, setDialogueInstruction] = useState(
    config.DIALOGS.Oak.welcome,
  );
  const [newProfile, setNewProfile] = useState(config.InitialStates.Profile);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const transferProfile = route.params;
    if (transferProfile?.isTransfer) {
      const parsedProfile = transferProfile;
      parsedProfile.isGirl = transferProfile.isGirl === 'true' ? true : false;
      setNewProfile(parsedProfile);
      setShowPreview(true);
      setDialogueInstruction(config.DIALOGS.Oak.profileTransfer);
    }
  }, [route]);

  useEffect(() => {
    if (newProfile.badges > 8) {
      setDialogueInstruction(config.DIALOGS.Oak.badges_validation);
    }
  }, [newProfile.badges]);

  const validateProfile = () => {
    const validationArray = [];

    for (const key in newProfile) {
      if (Object.hasOwnProperty.call(newProfile, key)) {
        const element = newProfile[key];
        validationArray.push(element ? true : false);
      }
    }
    if (
      validationArray.filter((x) => x === false).length > 2 ||
      newProfile.badges > 8
    ) {
      setDialogueInstruction(
        newProfile.badges > 8
          ? config.DIALOGS.Oak.badges_validation
          : config.DIALOGS.Oak.profile_validation_error,
      );
      return false;
    } else {
      setDialogueInstruction(config.DIALOGS.Oak.profile_validation_done);
      setShowPreview(true);
    }
  };

  const saveProfile = async () => {
    const profiles = await AsyncStorage.getData(config.AS_KEYS.PROFILES);
    newProfile.id = uuidv4();
    const profileArray =
      profiles !== null ? [newProfile, ...profiles] : [newProfile];
    const result = AsyncStorage.storeData(
      config.AS_KEYS.PROFILES,
      profileArray,
    );
    setShowPreview(false);
    setNewProfile(config.InitialStates.Profile);
    setDialogueInstruction(config.DIALOGS.Oak.welcome);
    navigation.goBack();
  };

  const returnToProfile = () => {
    setShowPreview(false);
    setDialogueInstruction(config.DIALOGS.Oak.review_profile);
  };

  const returnToMainScreen = () => {
    if (route.params?.isTransfer) {
      navigation.navigate(config.SCREENS.TITLE_SCREEN.TitleScreen);
    } else {
      navigation.goBack();
    }

    setDialogueInstruction(config.DIALOGS.Oak.welcome);
    setNewProfile(config.InitialStates.Profile);
  };

  return (
    <View style={styles.layout.viewWrapper}>
      <View
        style={
          orientation === 'LANDSCAPE'
            ? styles.layout.fullFlexLand
            : styles.layout.fullFlex
        }>
        <CharacterDisplay
          imgSrc={
            orientation === 'LANDSCAPE'
              ? config.CHARACTERS_IMAGES.oakB
              : config.CHARACTERS_IMAGES.oak
          }
          isPokedexView={false}
          optionalDialogue={dialogueInstruction}
        />
        {showPreview ? (
          <ProfileSelection
            profile={newProfile}
            width={orientation === 'LANDSCAPE' ? '50%' : '100%'}
            height={orientation === 'LANDSCAPE' ? '100%' : '40%'}
            isCreation={true}
          />
        ) : (
          <NewProfile
            newProfile={newProfile}
            setNewProfile={setNewProfile}
            setDialogueInstruction={setDialogueInstruction}
          />
        )}
      </View>
      <View
        style={[
          styles.layout.rowWrapCenter,
          styles.layout.customHeight('30%'),
        ]}>
        <Pressable
          style={
            showPreview
              ? styles.components.createButton(
                  styles.theme.palette.ForestGreenCrayola,
                )
              : styles.components.createButton(styles.theme.palette.BottleGreen)
          }
          onPress={() => {
            showPreview ? saveProfile() : validateProfile();
          }}>
          <Text style={styles.theme.fonts.basicFontWhite}>
            {showPreview ? 'Done!' : 'Accept'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.components.createButton(styles.theme.palette.RedRYB)}
          onPress={() => {
            showPreview ? returnToProfile() : returnToMainScreen();
          }}>
          <Text style={styles.theme.fonts.basicFontWhite}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewProfileScreen;
