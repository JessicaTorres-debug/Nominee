import React from 'react';
import { StyleSheet, Text } from "react-native";

const SubHeader = ({ title }) => (
  <Text style={styles.headerText}>{title}</Text>
);

const styles = StyleSheet.create({
  headerText: {
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 40,
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

export default SubHeader;