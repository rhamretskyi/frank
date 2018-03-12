import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { TurqButton, Card, CardSection, Input, Spinner, Button } from './common/Index';

class LoginForm extends Component {
  // state = { email: '', password: '', error: '', loading: false };

  // onButtonPress() {
  //   const { email, password } = this.state;

  //   this.setState({ error: '', loading: true });

  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(this.onLoginSuccess.bind(this))
  //     .catch(() => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password)
  //         .then(this.onLoginSuccess.bind(this))
  //         .catch(this.onLoginFail.bind(this));
  //     });
  // }

  // onLoginFail() {
  //   this.setState({ error: 'Authentication Failed', loading: false });
  // }

  // onLoginSuccess() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     loading: false,
  //     error: ''
  //   });

  //   Actions.land();
  // }

  submit = (values) => {
    this.props.onSubmit(values);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <TurqButton onPress={this.props.handleSubmit(this.submit)}>
        Log in
      </TurqButton>
    );
  }

  render() {
    const { input } = this.props;

    return (
      <KeyboardAwareScrollView style={styles.viewStyle}>
        <Image style={styles.imgStyle} source={require('../img/logo.png')} alt="Frank's logo" />
        <View style={{ paddingTop: 80 }}>
          <Card>
          <Text style={styles.loginTextStyle}>Login</Text>
            <CardSection>
              <Field
                name="email"
                component={Input}
                placeholder="E-mail"
                iconType="user"
              />
            </CardSection>

            <CardSection>
              <Field
                name="password"
                component={Input}
                secureTextEntry
                placeholder="Password"
                iconType="key"
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>

          </Card>
        </View>
        
        <View style={{ paddingTop: 95 }}>
            <Button onPress={() => Actions.signUp()}>Sign Up</Button>
          </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  loginTextStyle: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  viewStyle: {
    backgroundColor: '#123c66',
    flex: 1
  },
  imgStyle: {
    alignSelf: 'center',
    marginTop: 60,
    height: 50,
    width: 50
  }
};

export default reduxForm({
  form: 'logIn'
})(LoginForm);
