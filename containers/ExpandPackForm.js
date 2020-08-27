import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';

const ExpandPackForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topSection}>
        <MainHeader title="Expand" />
        <SubHeader title="Your Pack" />
      </View>
      <View style={styles.midSection}>
      </View>
      <View style={styles.bottomSection}>
        <PrimaryButton title="Add" />
        <PrimaryButton title="Finished" onPress={() => navigation.navigate('Share And Start')} />
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
    top: 0,
  },
  midSection: {
    flex: 2,
  },
  bottomSection: {
    flex: 1,
  },
});

export default ExpandPackForm;
