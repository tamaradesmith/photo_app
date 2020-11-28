// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from './styles/styles';


import Photo from './components/PhotoIndex'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.app}>
        <Text style={styles.header}>Photo App!</Text>
        <Photo />
        <StatusBar style="auto" />
      </View>
    </>
  );
}