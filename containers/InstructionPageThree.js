import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SecondaryButton from '../components/SecondaryButton';
import InstructionHeader from '../components/InstructionHeader';
import PlayerOption from '../components/PlayerOption';

const InstructionPageThree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InstructionHeader title="How To Play" />
      <PlayerOption playerName="Brandon" />
      <PlayerOption playerName="Reese" />
      <PlayerOption playerName="Greg" />

      <SecondaryButton title="Next" onPress={() => navigation.navigate('Instructions 4')} />
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

export default InstructionPageThree;
