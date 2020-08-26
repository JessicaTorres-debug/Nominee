import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton'

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}></View>
      <View style={styles.midSection}>
        <PrimaryButton title="Start A Game" onPress={() => navigation.navigate('Start')} />
        <PrimaryButton title="Join A Game" onPress={() => navigation.navigate('Join')} />
      </View>
      <View style={styles.bottomSection}>
        <Text onPress={() => navigation.navigate('Instructions 1')} style={styles.link}>Game Guide</Text>
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

export default LandingPage;
