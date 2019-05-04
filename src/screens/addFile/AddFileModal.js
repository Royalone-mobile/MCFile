import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { APP_THEME } from '../../constants';

class AddFileModal extends Component {
  componentDidMount = () => {
    console.log('PROPPS HERE', this.props);
  };
  render() {
    return (
      <View style={{ height: 100, backgroundColor: 'white' }}>
        <TouchableOpacity
          onPress={() => {
            this.props.onDismiss();
            this.props.navigation.navigate('CreateFolder');
          }}
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        >
          <MaterialCommunityIcons
            name="camera"
            size={32}
            color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
            style={{ paddingLeft: 10, paddingRight: 10 }}
          />
          <Text>Take a Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        >
          <MaterialCommunityIcons
            name="upload"
            size={32}
            color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
            style={{ paddingLeft: 10, paddingRight: 10 }}
          />
          <Text>File Upload</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddFileModal;
