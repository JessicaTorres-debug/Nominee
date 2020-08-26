import React from 'react';
import { StyleSheet, Text } from "react-native";

import PromptContainer from '../components/PromptContainer';

const InstructionHeader = ({ title }) => (
  <PromptContainer childComponent={<Text style={styles.headerText}>{title}</Text>} />
);

const styles = StyleSheet.create({
  headerText: {
    // fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
  }
});

export default InstructionHeader;
