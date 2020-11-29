import React from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles/styles'

import Photo from './components/PhotoIndex';

export default function App() {
  return (
      <View style={styles.app}>
        <StatusBar barStyle="light-content" />
        <Photo />
        <StatusBar style="auto" />
      </View>
  );
}