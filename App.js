import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  borderWidth: 1,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18,
                }}
              />
              <Image
                source={require('./icon/search.png')}
                style={{position: 'absolute', top: 5, left: 12}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./icon/coupon.png')} />
            </View>
          </View>

          {/* gopay section */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2C5FB8',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
              }}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                Rp, 50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2f65bd',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Pay
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Nearby
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Top Up
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>

          {/* main feature */}
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
                marginBottom: 18,
              }}>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
              <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/home-active.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}>
                  GO-MENU
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 17,
              backgroundColor: '#f2f2f4',
              marginTop: 20,
            }}></View>

          {/* News Section */}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./images/news.jpg')}
                style={{height: 170, width: '100%', borderRadius: 6}}
              />
              {/* masking - darken the news image, to let the logo displayed clearer */}
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.3,
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
                  source={require('./logo/gojek.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: '#e8e9ed',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
                GO-NEWS
              </Text>
              <Text style={{fontSize: 14, color: '#7a7a7a', marginBottom: 11}}>
                Wabah Virus Wuhang
              </Text>
              {/* custom button */}
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
                  READ
                </Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>

          {/* Internal Information */}
          <View style={{padding: 16, paddingBottom: 0}}>
            {/* logo */}
            <View
              style={{
                height: 25,
                width: 80,
                marginLeft: -12,
              }}>
              <Image
                source={require('./logo/gojek.png')}
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
                <Image source={require('./images/facebook-connect.png')} />
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
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

          {/* Gofood Banner Section */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./images/food.jpg')}
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
                  source={require('./logo/gojek.png')}
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
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
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

          {/* Nearby Gofood section */}
          <View>
            {/* logo */}
            <View
              style={{
                height: 25,
                width: 80,
                marginLeft: 2,
              }}>
              <Image
                source={require('./logo/gojek.png')}
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
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
                See All
              </Text>
            </View>

            {/* food carousel */}
            <ScrollView
              horizontal
              style={{flexDirection: 'row', paddingLeft: 16}}>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./images/go-food-sederhana-minang.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1c1c1c',
                    marginTop: 12,
                  }}>
                  Sederhana Minang
                </Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./images/go-food-kfc.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1c1c1c',
                    marginTop: 12,
                  }}>
                  KFC
                </Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./images/go-food-bakmi-gm.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1c1c1c',
                    marginTop: 12,
                  }}>
                  Bakmi GM
                </Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150}}>
                  <Image
                    source={require('./images/go-food-pizza-hut.jpg')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1c1c1c',
                    marginTop: 12,
                  }}>
                  Pizza Hut
                </Text>
              </View>
              <View style={{marginRight: 16}}>
                <View>
                  <View style={{width: 150, height: 150}}>
                    <Image
                      source={require('./images/go-food-pak-boss.jpg')}
                      style={{
                        width: undefined,
                        height: undefined,
                        resizeMode: 'cover',
                        flex: 1,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1c1c1c',
                      marginTop: 12,
                    }}>
                    Ayam Bakar Pak Boss
                  </Text>
                </View>
              </View>
            </ScrollView>

            {/* border line */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#e8e9ed',
                paddingBottom: 16,
                marginTop: 16,
                marginHorizontal:16
              }}></View>
          </View>

        </ScrollView>

        {/* btm nav */}
        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-active.png')}
            />
            <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-inactive.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-inactive.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-inactive.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./icon/home-inactive.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
