import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavBar from './NavBar';

class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  leapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  setCounter() {
    //We need to set a counter for how many days until a bill is due
    let date = new Date().toDateString();
    let currentMonth = date.substr(4, 3);
    let currentDay = date.substr(8, 2);
    let year = date.substr(11, 4);

    let daysInMonth = 0;

    switch(currentMonth) {
      case 'Dec':
        daysInMonth = 31;
      break;
      case 'Jan':
        daysInMonth = 31;
      break;
      case 'Feb': 
        if (this.leapYear) {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
      break;
      case 'Mar':
        daysInMonth = 31;
      break;
      case 'Apr':
        daysInMonth = 30;
      break;
      case 'May':
        daysInMonth = 31;
      break;
      case 'Jun':
        daysInMonth = 30;
      break;
      case 'Jul':
        daysInMonth = 31;
      break;
      case 'Aug':
        daysInMonth = 31;
      break;
      case 'Sep':
        daysInMonth = 30;
      break;
      case 'Oct':
        daysInMonth = 31;
      break;
      case 'Nov':
        daysInMonth = 30;
      break;
    }

    currentDay = parseInt(currentDay);

    let diff = daysInMonth - currentDay;

    this.setState({
      counter: diff
    })
  }

  componentWillMount() {
    this.setCounter();
  }

  render() {
    return (
      <View style={{ paddingTop: 25, backgroundColor: '#123c66' }}>
        <View style={styles.containerStyle}>
          <Image style={styles.logoStyle} source={require('../img/logo.png')} accessibilityLabel="Frank's logo" />
          <Text style={styles.homeTextStyle}>Home</Text>
        </View>
        <View style={styles.topViewStyle}>
          <Text style={styles.topTextStyle}>Days Until Next Payment</Text>
          <Image source={require('../img/donute.png')} accessibilityLabel="Amount of days until electric bill is due" />
          <Text>{this.state.counter}</Text>
        </View>
        <View style={styles.bottomViewStyle}>
          <Text>Button Components goes here.</Text>
        </View>
        <NavBar />
      </View>
    );
  }
}

const styles = {
  topViewStyle: {
    backgroundColor: '#123c66',
    paddingTop: 3,
    paddingBottom: 20,
    alignItems: 'center'
  },
  bottomViewStyle: {
    backgroundColor: '#f8fcff',
    padding: 20,
    marginBottom: 50
  },
  topTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 20
  },
  homeTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  logoStyle: {
    width: 35,
    height: 35
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  }
}

export default AccountDetails;