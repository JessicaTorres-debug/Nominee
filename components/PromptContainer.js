import React from 'react';
import { StyleSheet, View } from "react-native";

const PromptContainer = ({ childComponent }) => (
  <View style={styles.headerContainer}>
    {childComponent}
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    width: 350,
    height: 125,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PromptContainer;
