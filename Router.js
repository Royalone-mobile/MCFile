import React from 'react';
import { StyleSheet, Dimensions, Alert, View, Image, Text } from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import LoginForm from './src/screens/auth/LoginScreen';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import Dashboard from './src/screens/dashboard';
import FolderScreen from './src/screens/folder';
import Search from './src/screens/search';
import CreateFolder from './src/screens/addFile/CreateFolder';
import Main from './src';
import mapStateAndProps from './src/hoc/mapStateAndProps';
import withBottomBar from './src/hoc/withBottomBar';
import globalConnector from './src/store/connector/globalConnector';
import deviceOrientationAndInfo from './src/hoc/deviceOrientationAndInfo';
import { NavigationActions, StackActions } from 'react-navigation';
import DetailScreen from './src/screens/dashboard/DetailScreen';
import DisplayPDF from './src/screens/dashboard/DisplayPDF';
import { compose } from 'recompose';

import { APP_FONTS, APP_THEME, APP_ROUTE } from './src/constants';

const styles = StyleSheet.create({
  //If need title start from left the put alginSelf:'flex-start', marginLeft:-30, textAlign: 'left'
  headerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    width: Dimensions.width,
    alignItems: 'center',
    color: APP_THEME.APP_BASE_FONT_COLOR,
    padding: 5,
    fontFamily: APP_FONTS.FONT_REGULAR
  }
});
const stackNavigaterOptions = (title, leftButton, rightButton) => {
  return {
    headerTitle: title.toUpperCase(),
    headerStyle: {
      backgroundColor: APP_THEME.APP_BASE_COLOR
    },
    headerTintColor: APP_THEME.APP_BASE_FONT_COLOR,
    headerTitleStyle: {
      fontFamily: APP_FONTS.FONT_MEDIUM
    },
    headerLeft: leftButton,
    headerRight: rightButton
  };
};

let enhance = compose(
  globalConnector,
  deviceOrientationAndInfo
);

const enhanceBottomBar = compose(
  globalConnector,
  deviceOrientationAndInfo,
  withBottomBar
);

const getScreen = (component, title, rightButton) => {
  if (rightButton == null) {
    rightButton = <View />;
  }

  return {
    screen: props => {
      const EnhancedScreen = enhance(component);
      return <EnhancedScreen {...props} />;
    },
    navigationOptions: ({ navigation }) =>
      stackNavigaterOptions(
        (navigation.state.params && navigation.state.params.headerTitle) ||
          title,
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
            McFile
          </Text>
        </View>,
        rightButton
      )
  };
};

const getScreenWithNavbar = component => {
  return {
    screen: props => {
      const EnhancedScreen = enhance(component);
      return <EnhancedScreen {...props} />;
    },
    navigationOptions: { header: null }
  };
};

const getScreenWithBottombar = component => {
  return {
    screen: props => {
      const EnhancedScreen = enhanceBottomBar(component);
      return <EnhancedScreen {...props} />;
    },
    navigationOptions: { header: null }
  };
};

const AppDrawer = createStackNavigator(
  {
    Dashboard: getScreenWithBottombar(Dashboard, 'Dashboard'),
    Search: getScreenWithBottombar(Search, ''),
    FolderScreen: getScreenWithBottombar(FolderScreen, ''),
    CreateFolder:getScreenWithBottombar(CreateFolder, ''),
    DetailScreen:getScreenWithBottombar(DetailScreen, ''),
    DisplayPDF:getScreenWithBottombar(DisplayPDF, '')
  },
  {
    initialRouteName: 'Dashboard'
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: getScreenWithNavbar(LoginForm, 'Login'),
    ForgotPassword: getScreenWithNavbar(ForgotPassword, 'Forgot Password')
  },
  {
    initialRouteName: 'SignIn'
  }
);

const AppRoute = createSwitchNavigator(
  {
    App: AppDrawer,
    AuthLoading: Main,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  }
);

const AppContainer = createAppContainer(AppRoute);

export default AppContainer;
