import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PackOption from '../components/PackOption';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';


const CreateGame = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}>
        <MainHeader title="Choose" />
        <SubHeader title="Game Pack" />
      </View>
      
      <View style={styles.midSection}>
        <PackOption title="Family Time" onPress={() => navigation.navigate('Expand Pack')} style={styles.option} />
        <PackOption title="Fun W/ Friends" onPress={() => navigation.navigate('Expand Pack')} style={styles.option} />
        <PackOption title="Adults Only" onPress={() => navigation.navigate('Expand Pack')} style={styles.option} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3B18A',
  },
  topSection: {
    flex: 1,
    top: 0,
  },
  midSection: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly', 
  },
  option: {
    // marginBottom: 50,
    // marginTop: 20,
  },
});

export default CreateGame;
