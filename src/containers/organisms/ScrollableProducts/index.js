import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        {/* logo */}
        <View
          style={{
            height: 25,
            width: 80,
            marginLeft: 2,
          }}>
          <Image
            source={require('../../../assets/logo/gojek.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#1c1c1c',
            }}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
            See All
          </Text>
        </View>

        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollableItem
            title="Sederhana Minang"
            img={require('../../../assets/images/go-food-sederhana-minang.jpg')}
          />
          <ScrollableItem
            title="KFC"
            img={require('../../../assets/images/go-food-kfc.jpg')}
          />
          <ScrollableItem
            title="Bakmi GM"
            img={require('../../../assets/images/go-food-bakmi-gm.jpg')}
          />
          <ScrollableItem
            title="Pizza Hut"
            img={require('../../../assets/images/go-food-pizza-hut.jpg')}
          />
          <ScrollableItem
            title="Ayam Bakar Pak Boss"
            img={require('../../../assets/images/go-food-pak-boss.jpg')}
          />
        </ScrollView>

        {/* border line */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e8e9ed',
            paddingBottom: 16,
            marginTop: 16,
            marginHorizontal: 16,
          }}></View>
      </View>
    );
  }
}

export default ScrollableProducts;
