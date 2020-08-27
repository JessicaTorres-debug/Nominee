import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';
import SecondaryButton from '../components/SecondaryButton';

const JoinGame = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <MainHeader title="Enter" />
        <SubHeader title="Your Code" />
      </View>

      <View>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text style={styles.midText}>Use A Name Your Friends Will Recognize</Text>
      </View>

      <View>
        <TextInput style={styles.input} />
      </View>

      <View>
        <SecondaryButton title="Join The Fun!" onPress={() => navigation.navigate('Join Wait')} />
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
  input: {
    width: 280,
    height: 43,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
  },
  midText: {
    fontWeight: 'bold',
    fontSize: 32,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'black',
    textShadowOffset: {
      width: 0,
      height: 3
    },
    textShadowRadius: 6,
    textShadowColor: '#dad7cd'
  },
});

export default JoinGame;
