import React from 'react';
import { View } from 'react-native';
import styles from './PlaceListStyle';
import ListItem from '../ListItem';

const PlaceList = ({ places }) => {
  const placesOutput = places.map((place, i) => (
    <ListItem key={i} placeName={place} />
  ));
  return <View style={styles.listContainer}>{placesOutput}</View>;
};

export default PlaceList;
