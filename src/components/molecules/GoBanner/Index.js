import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoBanner = props => {
  return (
    <View style={{padding: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/images/food.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        {/* masking - darken the food image, to let the logo displayed clearer */}
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 6,
          }}></View>
        {/* logo */}
        <View
          style={{
            height: 25,
            width: 80,
            position: 'absolute',
            top: 16,
            left: 16,
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
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Free GO-FOOD voucher
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              Quick, before they run out!
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'stretch',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* border line */}
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#e8e9ed',
          paddingBottom: 16,
          marginTop: 16,
        }}></View>
    </View>
  );
};

export default GoBanner;
