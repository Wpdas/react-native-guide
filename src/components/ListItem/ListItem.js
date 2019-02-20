import React from 'react';
import { Text, View } from 'react-native';
import styles from './ListItemStyle';

const ListItem = ({ placeName }) => (
  <View style={styles.listItem}>
    <Text>{placeName}</Text>
  </View>
);

export default ListItem;
