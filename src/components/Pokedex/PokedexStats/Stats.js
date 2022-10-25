import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../../../styles';
import {
  VictoryChart,
  VictoryGroup,
  VictoryPolarAxis,
  VictoryLabel,
  VictoryTheme,
  VictoryArea,
} from 'victory-native';

const Stats = ({pokemonInfo, pokemonSpecie, index, actualRender}) => {
  const [data, setData] = useState([]);
  const [maxima, setMaxima] = useState([]);

  const stats = {...pokemonInfo.stats};

  const preData = [
    {
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      special_attack: stats[3].base_stat,
      special_defense: stats[4].base_stat,
      speed: stats[5].base_stat,
    },
    {
      hp: 150,
      attack: 150,
      defense: 150,
      special_attack: 150,
      special_defense: 150,
      speed: 150,
    },
  ];

  useEffect(() => {
    setData(processData(preData));
    setMaxima(getMaxima(preData));
  }, []);

  function getMaxima(_data) {
    const groupedData = Object.keys(_data[0]).reduce((memo, key) => {
      memo[key] = _data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  function processData(_data) {
    const maxByGroup = getMaxima(_data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return {x: key, y: d[key] / maxByGroup[key]};
      });
    };
    return _data.map((datum) => makeDataArray(datum));
  }

  if (index === actualRender) {
    return (
      <ScrollView>
        <View style={styles.components.pokedexContainer()}>
          <View style={styles.layout.rowContainer}>
            <View style={styles.layout.customeMarginRight(15)}>
              <Text style={styles.theme.fonts.basicFont}>
                hp: {preData[0].hp}
              </Text>
              <Text style={styles.theme.fonts.basicFont}>
                attack: {preData[0].attack}
              </Text>
              <Text style={styles.theme.fonts.basicFont}>
                defense: {preData[0].defense}
              </Text>
            </View>
            <View style={styles.layout.customeMarginLeft(15)}>
              <Text style={styles.theme.fonts.basicFont}>
                special-attack: {preData[0].special_attack}
              </Text>
              <Text style={styles.theme.fonts.basicFont}>
                special-defense: {preData[0].special_defense}
              </Text>
              <Text style={styles.theme.fonts.basicFont}>
                speed: {preData[0].speed}
              </Text>
            </View>
          </View>
          <View style={{transform: [{translateY: -15}]}}>
            <VictoryChart
              height={300}
              width={300}
              polar
              theme={VictoryTheme.material}
              domain={{y: [0, 1]}}>
              <VictoryGroup
                colorScale={['purple', 'gray', 'tomato']}
                style={{data: {fillOpacity: 0.2, strokeWidth: 2}}}>
                {data.map((_data, i) => {
                  return <VictoryArea key={i} data={_data} />;
                })}
              </VictoryGroup>
              {Object.keys(maxima).map((key, i) => {
                return (
                  <VictoryPolarAxis
                    key={i}
                    dependentAxis
                    style={{
                      axisLabel: {padding: 10},
                      axis: {stroke: 'none'},
                      grid: {stroke: 'grey', strokeWidth: 0.25, opacity: 0.5},
                    }}
                    tickLabelComponent={
                      <VictoryLabel labelPlacement="vertical" />
                    }
                    labelPlacement="perpendicular"
                    axisValue={i + 1}
                    label={key}
                    tickFormat={(t) => Math.ceil(t * maxima[key])}
                    tickValues={[0.25, 0.5, 0.75]}
                  />
                );
              })}
              <VictoryPolarAxis
                labelPlacement="parallel"
                tickFormat={() => ''}
                style={{
                  axis: {stroke: 'none'},
                  grid: {stroke: 'grey', opacity: 0.5},
                }}
              />
            </VictoryChart>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <>
        <View />
      </>
    );
  }
};

export default Stats;
