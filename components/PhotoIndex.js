import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from '../styles/styles';

import { PhotoQuery } from '../js/requests';

import PhotoDetails from './PhotoDetails';
import Button from './Button';

const PhotoIndex = () => {

  const [photos, setPhotos] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const loadMore = async () => {
    setIsLoading(true);
    if (!fetching) {
      setFetching(true);
      const getMorePhoto = await PhotoQuery.getMore(page);
      const newList = [...photos, ...getMorePhoto];
      setPage(page + 1);
      setPhotos([...photos, ...getMorePhoto]);
      setIsLoading(false);
      setFetching(false);
    }
  };

  const handleClick = () => {
    setPhotos(handleReorder([...photos]));
  };

  const handleReorder = (list) => {
    const newOrder = [];
    if (!list.length) {
      return newOrder;
    }
    const index = Math.floor(Math.random() * list.length);
    newOrder.push(list[index]);
    const remainingList = list.slice(0, index).concat(list.slice(index + 1));
    return newOrder.concat(handleReorder(remainingList));
  };

  useEffect(() => {
    let isCancelled = false;
    const getPhotos = async () => {
      const photoList = await PhotoQuery.getAll();
      if (!isCancelled) {
        setPhotos(photoList);
        setPage(page + 1);
      };
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
        extraData={photos}
        keyExtractor={(item) => "photo" + item.id.toString()}
        renderItem={({ item }) => (
          <PhotoDetails photo={item} />
        )}
        onEndReachedThreshold={10}
        onEndReached={loadMore}
        refreshing={isLoading}
        ListEmptyComponent={<Text>'No Photos'</Text>}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text >Loading More...</Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Photo App!</Text>
        <Button clickAction={handleClick} style={styles.button} buttonText={'Click to Reorder'} />
      </View>

    </View>
  );
};

export default PhotoIndex;


