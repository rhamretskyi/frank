import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Field, reduxForm } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { TurqButton, Card, CardSection, Input, Spinner, Button, BackButton } from './common/Index';
import Agreement from '../containers/Agreement';

class SignUpForm extends Component {

  submit = (values) => {
    this.props.onSubmit(values);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <TurqButton onPress={this.props.handleSubmit(this.submit)}>
        Login
      </TurqButton>
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.viewStyle}>
        <BackButton onPress={() => Actions.start()} />
        <Image style={styles.imgStyle} source={require('../img/logo.png')} alt="Frank's logo" />
        <View style={{ paddingTop: 40 }}>
          <Card>
          <Text style={styles.loginTextStyle}>Signup</Text>
            <CardSection>
              <Field
                name="userName"
                component={Input}
                iconType="user"
                placeholder="Name"
              />
            </CardSection>
            <CardSection>
              <Field
                name="email"
                component={Input}
                iconType="user"
                placeholder="E-mail"
              />
            </CardSection>
            <CardSection>
              <Field
                name="phone"
                component={Input}
                iconType="user"
                placeholder="Phone Number"
              />
            </CardSection>
            <CardSection>
              <Field
                name="password"
                component={Input}
                iconType="key"
                secureTextEntry
                placeholder="Password"
              />
            </CardSection>

            <CardSection>
              <Field
                name="passwordConfirm"
                component={Input}
                iconType="key"
                secureTextEntry
                placeholder="Password"
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
          <View style={{ paddingTop: 15 }}>
            <Button onPress={() => Actions.auth()}>Sign In</Button>
          </View>
        </View>
        <Agreement />
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
    paddingBottom: 5,
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
  form: 'signUp',
  validate: (values) => {
    const errors = {};
    // errors.userName = !values.userName ? 'Name field is required'
    //   : (/[&?!+]/.test(values.userName))
    //   ? "&, ?, !, + is not valid symbols"
    //   : undefined;
    // errors.email = !values.email 
    //   ? 'E-mail field is required' 
    //   : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    //   ? 'E-mail is not valid'
    //   : undefined;
    // errors.phone = values.phone && (!/^[0-9]{10}$/.test(values.phone))
    //   ? 'Phone Number must contain 10 digits'
    //   : undefined
    // errors.password = !values.password
    //   ? 'Password field is required'
    //   : values.password.length < 6
    //   ? 'Password must be at least 6 characters long'
    //   : undefined;
    // errors.passwordConfirm = values.password != values.passwordConfirm
    //   ? 'Passwords do not match'
    //   : undefined
    return errors;
  }
})(SignUpForm);


