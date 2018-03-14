import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { TurqButton, Card, CardSection, Input, Spinner, Button, BackButton, Error } from './common/Index';

class LoginForm extends Component {

  submit = (values) => {
    this.props.onSubmit(values);
  }

  componentDidMount() {
    this.props.reset();
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
    return (
      <KeyboardAwareScrollView style={styles.viewStyle}>
        <BackButton onPress={() => Actions.start()} />
        <Image style={styles.imgStyle} source={require('../img/logo.png')} alt="Frank's logo" />
        <Error errorStore={this.props.errorStore} />
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
  form: 'logIn',
  validate: (values) => {
    const errors = {};
    errors.email = !values.email 
      ? 'E-mail field is required' 
      : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      ? 'E-mail is not valid'
      : undefined;
    errors.password = !values.password
      ? 'Password field is required'
      : values.password.length < 6
      ? 'Password must be at least 6 characters long'
      : undefined;
    return errors;
  }
})(LoginForm);
