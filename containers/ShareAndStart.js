import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import SecondaryButton from '../components/SecondaryButton';
import MainHeader from '../components/MainHeader';

const ShareAndStart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topSection}>
        <MainHeader title="Share" />
      </View>

      <View style={styles.midSection}>
      </View>

      <View style={styles.bottomSection}>
        <SecondaryButton title="Start Playing!" onPress={() => navigation.navigate('Countdown')} />
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
    flex: 3,
  },
  midSection: {
    flex: 5,
  },
  bottomSection: {
    flex: .5,
  },
  link: {
    bottom: 0,
    fontSize: 12,
    textDecorationLine: 'underline',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ShareAndStart;
