import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { APP_THEME } from '../constants';
import BottomBar from '../component/BottomBar';

export default WrappedComponent => {
  class withBottomBarComponent extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <WrappedComponent {...this.state} {...this.props} />
          </View>
          <BottomBar {...this.props} />
        </View>
      );
    }
  }
  return withBottomBarComponent;
};
