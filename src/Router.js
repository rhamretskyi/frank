import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import Landing from './components/Landing';
import AccountDetails from './components/AccountDetails';
import HistoricUsage from './components/HistoricUsage';
import Map from './components/Map';
import ChatSupport from './components/ChatSupport';
import { connect } from 'react-redux';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import token from './utils/token';
import ForgotPassword from './containers/ForgotPassword';
import RestorePassword from './containers/RestorePassword';

const RouterWithRedux = connect()(Router);

const RouterComponent = () => {
  return (

    <RouterWithRedux>
      <Scene key="start" initial>
        <Scene key="home" component={Home} title="Home" hideNavBar />
      </Scene>

      <Scene key="auth">
        <Scene key="login" component={LogIn} title="Login" hideNavBar />
      </Scene>
      
      <Scene key="signUp" component={SignUp} title="Sign up" hideNavBar  />
      
      <Scene key="forgotPassword" component={ForgotPassword} title="Forgot Password" hideNavBar  />

      <Scene key="restorePassword" component={RestorePassword} title="Forgot Password" hideNavBar  />

      <Scene key="land">
        <Scene key="landing" component={Landing} title="Statistics" hideNavBar initial />
      </Scene>

      <Scene key="account">
        <Scene key="accountDetails" component={AccountDetails} title="Home" hideNavBar />
      </Scene>

      <Scene key="usage">
        <Scene key="historicalUsage" component={HistoricUsage} title="Historic Usage" hideNavBar />
      </Scene>

      <Scene key="map">
        <Scene key="mapDetails" component={Map} hideNavBar title="Map" />
      </Scene>

      <Scene key="chat">
        <Scene key="chatSupport" component={ChatSupport} hideNavBar title="Support" />
      </Scene>
    </RouterWithRedux>

  );
};

export default RouterComponent;
