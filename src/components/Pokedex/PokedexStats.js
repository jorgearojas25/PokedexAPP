import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import BasicInfo from './PokedexStats/BasicInfo';
import Moves from './PokedexStats/Moves';
import Others from './PokedexStats/Others';
import Stats from './PokedexStats/Stats';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles';
import Pokedex from '../../sources';

const PokedexStats = ({pokemonInfo}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'basicInfo', title: 'basicInfo', icon: 'md-newspaper'},
    {key: 'stats', title: 'stats', icon: 'ios-stats-chart'},
    {key: 'moves', title: 'moves', icon: 'md-paw'},
    {key: 'others', title: 'others', icon: 'ribbon'},
  ]);
  const [specieData, setSpecieData] = useState({});

  useEffect(() => {
    async function getData() {
      Pokedex.getPokemonSpeciesByNameOrId(pokemonInfo.name).then((data) =>
        setSpecieData(data),
      );
    }
    getData();
  }, [pokemonInfo]);

  const renderIcon = ({route}) => {
    return <Icon name={route.icon} size={16} color={'white'} />;
  };

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'basicInfo':
        return (
          <BasicInfo
            pokemonInfo={pokemonInfo}
            pokemonSpecie={specieData}
            index={0}
            actualRender={index}
            jumpTo={jumpTo}
          />
        );
      case 'stats':
        return (
          <Stats
            pokemonInfo={pokemonInfo}
            pokemonSpecie={specieData}
            index={1}
            actualRender={index}
            jumpTo={jumpTo}
          />
        );
      case 'moves':
        return (
          <Moves
            pokemonInfo={pokemonInfo}
            pokemonSpecie={specieData}
            index={2}
            actualRender={index}
            jumpTo={jumpTo}
          />
        );
      case 'others':
        return (
          <Others
            pokemonInfo={pokemonInfo}
            pokemonSpecie={specieData}
            index={3}
            actualRender={index}
            sjumpTo={jumpTo}
          />
        );
    }
  };

  return (
    <View style={{height: '100%'}}>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            tabStyle={{
              backgroundColor: styles.theme.palette.Jet,
            }}
            indicatorStyle={{backgroundColor: 'red'}}
            renderIcon={(props) => renderIcon(props)}
            labelStyle={{display: 'none'}}
          />
        )}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        initialLayou={{width: Dimensions.get('window').width}}
        lazy={true}
      />
    </View>
  );
};

export default PokedexStats;
