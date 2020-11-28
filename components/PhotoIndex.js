import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from '../styles/styles';

import { PhotoQuery } from '../js/requests';
import PhotoDetails from './PhotoDetails';


const PhotoIndex = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getPhotos = async () => {
      const photoList = await PhotoQuery.getAll();
      if (!isCancelled) {
        setPhotos(photoList);
      }
    };
    getPhotos();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <View style={styles.photoDiv}>
      <FlatList
        horizontal
        data={photos}
        renderItem={({ item }) => (
          <PhotoDetails
            keyExtractor={(item) => item.id.toString()}
            photo={item}
          />
        )}
      />
    </View>
  );
};

export default PhotoIndex;


