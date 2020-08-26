import React from 'react';
import { StyleSheet, Text } from "react-native";

const MainHeader = ({ title }) => (
  <Text style={styles.headerText}>{title}</Text>
);

const styles = StyleSheet.create({
  headerText: {
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 64,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',

    textShadowOffset: {
      width: 0,
      height: 3
    },
    textShadowRadius: 6,
    textShadowColor: '#dad7cd',
  }
});

export default MainHeader;
