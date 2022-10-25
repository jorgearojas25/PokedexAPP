import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/Redux';
import {NavigationContainer} from '@react-navigation/native';
import TitleScreen from './src/screens/TitleScreen';
import MainScreen from './src/screens/MainScreen';
import NewProfileScreen from './src/screens/NewProfileScreen';
import QRScanScreen from './src/screens/QRScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import config from './config';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const linking = {
    prefixes: config.prefixes,
    config: {
      screens: {
        TitleScreen: 'TitleScreen',
        NewProfile:
          'NewProfile/:isTransfer/:id/:name/:isGirl/:age/:region/:badges',
        MainScreen: {
          screens: {
            DetailedProfile: 'DetailedProfile',
            Pokedex: 'Pokedex/:id',
            Teams: 'Teams',
            Maps: 'Maps',
          },
        },
        QRScanScreen: 'QRScanScreen',
      },
    },
  };
  SplashScreen.hide();
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer linking={linking}>
          <SafeAreaView style={styles.mainView}>
            <Tab.Navigator
              initialRouteName={config.SCREENS.TITLE_SCREEN.TitleScreen}>
              <Tab.Screen
                options={{tabBarVisible: false}}
                name={config.SCREENS.TITLE_SCREEN.TitleScreen}
                component={TitleScreen}
              />
              <Tab.Screen
                options={{tabBarVisible: false}}
                name={config.SCREENS.TITLE_SCREEN.NewProfileScreen}
                component={NewProfileScreen}
              />
              <Tab.Screen
                options={{tabBarVisible: false}}
                name={config.SCREENS.TITLE_SCREEN.MainScreen}
                component={MainScreen}
              />
              <Tab.Screen
                options={{tabBarVisible: false}}
                name={config.SCREENS.TITLE_SCREEN.QRScanScreen}
                component={QRScanScreen}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1},
});

export default App;
