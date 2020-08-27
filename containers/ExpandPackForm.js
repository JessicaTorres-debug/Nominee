import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';

const ExpandPackForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
    {/* <KeyboardAvoidingView style={styles.container} behavior="padding"> */}
      <StatusBar style="auto" />

      <View style={styles.topSection}>
        <MainHeader title="Expand" />
        <SubHeader title="Your Pack" />
      </View>
      <View style={styles.midSection}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.bottomSection}>
        <PrimaryButton title="Add" />
        <PrimaryButton title="Finished" onPress={() => navigation.navigate('Share And Start')} />
      </View>
    {/* </KeyboardAvoidingView> */}
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
    // flex: 2,
    top: 0,
  },
  midSection: {
    // flex: 2,
  },
  bottomSection: {
    // flex: .5,
  },
  input: {
    width: 280,
    height: 43,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
  },
});

export default ExpandPackForm;
