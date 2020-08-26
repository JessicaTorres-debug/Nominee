import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SecondaryButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: 209,
    height: 42,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: 'black',
    
    shadowOffset: {
      width: 4,
      height: 3
    },
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.28)',
    shadowOpacity: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SecondaryButton;
