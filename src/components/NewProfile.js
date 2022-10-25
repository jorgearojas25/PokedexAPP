import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles';
import config from '../../config';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import {useOrientation} from '../hooks/useOrientation';

const NewProfile = ({
  newProfile,
  setNewProfile,
  setDialogueInstruction,
  disabledInputs,
}) => {
  const orientation = useOrientation();
  const setProfileValueAndDialogue = (key, value, dialogue) => {
    if (dialogue !== undefined) {
      setDialogueInstruction(dialogue);
    }
    return setNewProfile({...newProfile, [key]: value});
  };
  const regionsPicker = [{name: 'please select a region'}, ...config.REGIONS];

  return (
    <View
      style={[
        styles.layout.rowWrapCenter,
        styles.layout.customWidth(orientation === 'LANDSCAPE' ? '50%' : '100%'),
      ]}>
      <View style={styles.layout.customWidth('100%')}>
        <Text>Name: </Text>
        <TextInput
          style={styles.components.textInput100}
          onChangeText={(text) =>
            setProfileValueAndDialogue(
              'name',
              text,
              `${config.DIALOGS.Oak.confirm_name} ${text}`,
            )
          }
          value={newProfile.name}
          placeholder={"What's Your Name?"}
          onFocus={() => {
            setDialogueInstruction(config.DIALOGS.Oak.ask_name);
          }}
        />
      </View>
      <View style={styles.layout.customWidth('50%')}>
        <RadioButton.Group
          onValueChange={(value) => {
            setProfileValueAndDialogue(
              'isGirl',
              value,
              `${config.DIALOGS.Oak.confirm_sex} ${value ? 'girl' : 'boy'}`,
            );
          }}
          value={newProfile.isGirl}>
          <View style={styles.layout.rowContainer}>
            <View
              style={[
                styles.layout.rowWrapCenter,
                styles.layout.customWidth('45%'),
              ]}>
              <Text style={styles.theme.fonts.basicFont}>Boy</Text>
              <RadioButton
                color={styles.theme.palette.ForestGreenCrayola}
                value={false}
              />
            </View>
            <View
              style={[
                styles.layout.rowWrapCenter,
                styles.layout.customWidth('45%'),
              ]}>
              <Text style={styles.theme.fonts.basicFont}>Girl</Text>
              <RadioButton
                color={styles.theme.palette.ForestGreenCrayola}
                value={true}
              />
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.layout.customWidth('50%')}>
        <Text>What's your age:</Text>
        <TextInput
          keyboardType={'phone-pad'}
          style={styles.components.textInput100}
          placeholder={'Age'}
          value={newProfile.age}
          onFocus={() => setDialogueInstruction(config.DIALOGS.Oak.ask_age)}
          onChangeText={(value) =>
            setProfileValueAndDialogue('age', value, config.DIALOGS.Oak.ask_age)
          }
        />
      </View>
      <View style={styles.layout.customWidth('50%')}>
        <Text>Region: </Text>
        <Picker
          selectedValue={newProfile.region}
          style={styles.components.textInput100}
          onValueChange={(itemValue, itemIndex) =>
            setProfileValueAndDialogue(
              'region',
              itemValue,
              config.DIALOGS.Oak.ask_region,
            )
          }>
          {regionsPicker.map((region, index) => (
            <Picker.Item key={index} label={region.name} value={region.name} />
          ))}
        </Picker>
      </View>
      <View style={styles.layout.customWidth('50%')}>
        <Text>Badges: </Text>
        <TextInput
          keyboardType={'phone-pad'}
          style={styles.components.textInput100}
          placeholder={'Number of badges'}
          value={newProfile.badges}
          onChangeText={(value) => {
            return setProfileValueAndDialogue(
              'badges',
              value,
              config.DIALOGS.Oak.ask_badges,
            );
          }}
        />
      </View>
    </View>
  );
};

export default NewProfile;
