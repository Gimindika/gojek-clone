import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="GO-CAR"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="GO-BLUEBIRD"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="GO-SEND"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="GO-DEALS"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="GO-PULSA"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="GO-FOOD"
            img={require('../../../assets/icon/home-active.png')}
          />
          <MainFeature
            title="MORE"
            img={require('../../../assets/icon/home-active.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;
