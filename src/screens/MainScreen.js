import React, {useEffect} from 'react';
import config from '../../config';
import DetailedProfileScreen from './DetailedProfileScreen';
import PokedexScreen from './PokedexScreen';
import TeamsScreen from './TeamsScreen';
import styles from '../styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import MapsScreen from './MapsScreen';

const tabBarIcon = (name) => ({focused, color, size}) => (
  <Icon
    name={name}
    size={size}
    color={
      focused ? styles.theme.palette.Gainsboro : styles.theme.palette.Gainsboro
    }
  />
);

const MainScreen = ({route, navigation}) => {
  const profile = route.params;

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: styles.theme.palette.RedRYB}}
      tabBar={(props) => (
        <BottomFabBar color={styles.theme.palette.RedRYB} {...props} />
      )}>
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('account')}}
        name={config.SCREENS.PROFILE_SCREEN.DetailedProfileScreen}
        children={() => <DetailedProfileScreen profile={profile} />}
      />
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('pokeball')}}
        name={config.SCREENS.PROFILE_SCREEN.Pokedex}
        children={() => <PokedexScreen />}
      />
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('cards-outline')}}
        name={config.SCREENS.PROFILE_SCREEN.Teams}
        children={() => <TeamsScreen />}
      />
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('pokemon-go')}}
        name={config.SCREENS.PROFILE_SCREEN.Maps}
        children={() => <MapsScreen />}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
