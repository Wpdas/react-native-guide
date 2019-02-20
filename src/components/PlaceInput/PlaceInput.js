import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './PlaceInputStyle';

export default class PlaceInput extends React.Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    const { onPlaceAdded } = this.props;
    onPlaceAdded(this.state.placeName);

    this.setState({
      placeName: ''
    });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}
