import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';
import CachedImage from 'react-native-expo-cached-image';


const PhotoDetails = (props) => {
  const { photo } = props;
  return (
    <View elevation={5} style={styles.container}>
      <View style={styles.photoView} >
        <CachedImage
          style={styles.photo}
          source={{
            uri: photo.url,
          }}
        />
        <Text style={styles.photoText}>{photo.title} </Text>
      </View>
    </View>
  );
};

export default PhotoDetails;