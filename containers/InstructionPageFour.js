import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SecondaryButton from '../components/SecondaryButton';
import InstructionHeader from '../components/InstructionHeader';

const Instructions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InstructionHeader title="How To Play" />

      <SecondaryButton title="Done" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8C5BA',
  },
});

export default Instructions;
