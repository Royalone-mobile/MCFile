import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';
import { APP_FONTS, APP_THEME } from '../../constants';

import ColorButton from '../../component/ColorButton';
import Button from '../../component/Button';
import Input from '../../component/Input';
import { makeLogin } from '../../services/mcFileClient';
import Loader from '../../component/Loader';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    loginErrorMessage: ''
  };

  componentDidMount = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    if (email && password) {
      this.setState({ email, password });
    }
  };

  forgotPasswordClicked = async () => {
    this.props.navigation.push('ForgotPassword');
  };

  loginClicked = async () => {
    if(this.state.email && this.state.password){
      try {
        console.log(this.props);
        this.setState({ loading: true, loginErrorMessage: '' });
        const response = await makeLogin(this.state.email, this.state.password);
        this.setState({ loading: false });
        if (response.data) {
          await AsyncStorage.setItem('EMAIL', this.state.email);
          await AsyncStorage.setItem('PASSWORD', this.state.password);
          await AsyncStorage.setItem('idSessao', `${response.data.idSessao}`);
          this.props.authActions.saveLoggedInUserInformation(response.data);
          this.props.navigation.navigate('App');
        }
      } catch (error) {
        console.log('error', error);
        this.setState({
          loading: false,
          loginErrorMessage: 'Invalid email and password'
        });
      }
    }
  };

  componentWillMount = () => {
    console.log('PROPS', this.props.navigation);
  };

  renderErrorMessage = () => {
    if (this.state.loginErrorMessage.length > 0) {
      return (
        <Text
          style={{
            color: APP_THEME.APP_BASE_COLOR,
            paddingBottom: 5,
            fontFamily: APP_FONTS.FONT_REGULAR
          }}
        >
          {this.state.loginErrorMessage}
        </Text>
      );
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../../assets/loginBG.jpg')}
        style={styles.container}
      >
        <Loader loading={this.state.loading} />
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo-mcfile.png')}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            placeholder="E-mail"
            value={this.state.email}
            isShowBorder
            onChangeText={email => {
              this.setState({ email });
            }}
          />
          <Input
            placeholder="Password"
            value={this.state.password}
            isShowBorder
            secureTextEntry
            onChangeText={password => {
              this.setState({ password });
            }}
          />
          {this.renderErrorMessage()}
          <View style={styles.leftAlign}>
            <Button
              style={{ fontFamily: APP_FONTS.FONT_REGULAR }}
              onPress={this.forgotPasswordClicked}
              title="Forgot Password?"
              textDecorationLine="underline"
            />
          </View>
          <View style={styles.rightAlign}>
            <ColorButton title="Login" onPress={this.loginClicked} />
          </View>
        </View>
        <View style={[styles.bottomView, styles.bottomMargin]}>
          <Text style={styles.whiteTextColor}>
            c 2018 McFile GmbH. All rights reserved.
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoView: {
    width: '90%',
    flex: 1,
    justifyContent: 'center'
  },
  inputView: {
    width: '75%',
    flex: 3,
    justifyContent: 'center'
  },
  topMargin: {
    marginTop: 10
  },
  bottomMargin: {
    marginBottom: 10
  },
  logo: {
    paddingTop: 20,
    height: 27,
    width: 108
  },
  whiteTextColor: {
    color: 'white'
  },

  leftAlign: {
    alignItems: 'flex-start'
  },
  rightAlign: {
    alignItems: 'flex-end'
  },
  bottomView: {
    justifyContent: 'flex-end',
    flex: 2
  }
});

export default LoginScreen;
