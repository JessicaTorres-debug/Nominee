import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const PlayerOption = ({ playerName }) => (
  <View style={styles.optionContainer}>
    <Text style={styles.optionText}>{playerName}</Text>
  </View>
);

const styles = StyleSheet.create({
  optionContainer: {
    width: 272,
    height: 48,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',

    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {

  },
});

export default PlayerOption;
