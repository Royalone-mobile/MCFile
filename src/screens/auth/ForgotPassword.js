import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Alert
} from 'react-native';

import ColorButton from '../../component/ColorButton';
import BorderButton from '../../component/BorderButton';
import Input from '../../component/Input';
import { APP_FONTS } from '../../constants';
import { makeForgotPassword } from '../../services/mcFileClient';
import Loader from '../../component/Loader';

class ForgotPassword extends Component {
  state = {
    email: 'JASWANT1990@GMAIL.des',
    loading: false,
    errorMessage: ''
  };
  backClicked = () => {
    this.props.navigation.pop();
  };

  makeForgotPassword = async () => {
    try {
      this.setState({ loading: true, loginErrorMessage: '' });
      const response = await makeForgotPassword(this.state.email);
      this.setState({ loading: false });
      setTimeout(() => {
        this.showConfirmationAlert();
      }, 200);
    } catch (error) {
      console.log('error', error);
      this.setState({
        loading: false,
        loginErrorMessage: 'Forgot password failed'
      });
      setTimeout(() => {
        alert('Forgot password failed');
      }, 200);
    }
  };

  showConfirmationAlert = () => {
    Alert.alert(
      'Forgot Password',
      'Instructions has been sent to provided EmailId',
      [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.pop();
          }
        }
      ],
      { cancelable: false }
    );
  };

  sendClicked = () => {
    this.makeForgotPassword();
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
        <View style={[styles.width80, styles.itemAlignCenter, { flex: 1 }]}>
          <Text
            style={[
              styles.textCenterAlign,
              styles.font25,
              {
                flex: 1
              }
            ]}
          >
            Forgot your password?
          </Text>
          <Text style={[styles.textCenterAlign, styles.font20, { flex: 1 }]}>
            We just need your registered E-mail ID to send you password reset
            instructions.
          </Text>
        </View>
        <View
          style={[styles.justifyContentCenter, styles.width80, { flex: 2 }]}
        >
          <Input
            placeholder="E-mail"
            isShowBorder
            value={this.state.email}
            onChangeText={email => {
              this.setState({ email });
            }}
          />
        </View>
        <View style={[styles.width80, styles.bottomButtons, { flex: 2 }]}>
          <BorderButton title="Back" onPress={this.backClicked} />
          <ColorButton title="Send" onPress={this.sendClicked} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 50
  },
  width80: {
    flex: 1,
    width: '80%'
  },
  inputText: {
    color: 'white',
    height: 40,
    fontSize: 25,
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  },
  bottomMargin: {
    marginBottom: 10
  },
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
  logo: {
    paddingTop: 20,
    height: 27,
    width: 108
  },
  rightAlign: {
    alignItems: 'flex-end'
  },
  textCenterAlign: {
    textAlign: 'center',
    color: 'white'
  },
  itemAlignCenter: {
    alignItems: 'center'
  },
  justifyContentBottom: {
    justifyContent: 'flex-start'
  },
  justifyContentStart: {
    justifyContent: 'flex-start'
  },
  justifyContentCenter: {
    justifyContent: 'flex-start'
  },
  font25: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: APP_FONTS.FONT_BOLD
  },
  font20: {
    fontSize: 16,
    fontFamily: APP_FONTS.FONT_REGULAR
  },
  redBackground: {
    backgroundColor: '#BE2727',
    alignItems: 'center',
    borderRadius: 10,
    fontWeight: 'bold'
  }
});

export default ForgotPassword;
