import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.item.image} style={styles.imageCon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageCon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});
