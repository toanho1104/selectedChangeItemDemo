import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Item } from '../components';
import { images } from '../assets/images';
import { dataItems } from '../configs';

export default class HomeScreen extends Component {
  state = {
    isSelected: images.like,
  };
  handleClick = item => {
    this.setState({
      isSelected: item.image,
    });
    console.log('item', item);
  };
  render() {
    // console.log(dataItems);
    console.log(this.state.isSelected);
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hôm nay bạn thấy thế nào </Text>
        <Image source={this.state.isSelected} style={styles.image} />

        <View style={{ flexDirection: 'row' }}>
          {dataItems.map((item, index) => {
            console.log('key', index);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.handleClick(item);
                }}>
                <Item item={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  image: {
    width: 150,
    height: 150,
    margin: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  imageCon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});
