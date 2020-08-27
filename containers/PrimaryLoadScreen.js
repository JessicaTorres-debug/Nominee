import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const PrimaryLoadScreen= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.link}>Your Host will start the game soon</Text>
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
  link: {
    bottom: 0,
    fontSize: 12,
    textDecorationLine: 'underline',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PrimaryLoadScreen;
