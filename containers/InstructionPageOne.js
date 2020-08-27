import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SecondaryButton from '../components/SecondaryButton';
import InstructionHeader from '../components/InstructionHeader';
import PlayerOption from '../components/PlayerOption';

const InstructionPageOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InstructionHeader title="How To Play" />
      <PlayerOption playerName="Trent" />
      <PlayerOption playerName="Brandon" />
      <PlayerOption playerName="Reese" />

      <SecondaryButton title="Next" onPress={() => navigation.navigate('Instructions 2')} />
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

export default InstructionPageOne;
