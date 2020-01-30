import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon
          title="Home"
          img={require('../../../assets/icon/home-active.png')}
          active
        />
        <NavBarIcon
          title="Orders"
          img={require('../../../assets/icon/home-inactive.png')}
        />
        <NavBarIcon
          title="Help"
          img={require('../../../assets/icon/home-inactive.png')}
        />
        <NavBarIcon
          title="Inbox"
          img={require('../../../assets/icon/home-inactive.png')}
        />
        <NavBarIcon
          title="Account"
          img={require('../../../assets/icon/home-inactive.png')}
        />
      </View>
    );
  }
}

export default NavBar;
