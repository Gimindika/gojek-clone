import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GoInfo = props => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      {/* logo */}
      <View
        style={{
          height: 25,
          width: 80,
          marginLeft: -12,
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
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete you profile
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image source={require('../../../assets/images/facebook-connect.png')} />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
            Connect with Facebook
          </Text>
          <Text style={{fontSize: 15, color: '#4a4a4a', width: '90%'}}>
            Login faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          CONNECT
        </Text>
      </TouchableOpacity>
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

export default GoInfo;
