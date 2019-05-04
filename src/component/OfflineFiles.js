import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { APP_FONTS, APP_THEME } from '../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class OffineFiles extends Component {
  state = { showingSublist: false };

  _keyExtractor = (item, index) => `${index}`;

  getIconByName = iconName => {
    console.log('MAXICON ', iconName);
    if (iconName == 'pdf') {
      return require('../../assets/pdf-icon.png');
    } else if (iconName == 'doc' || iconName == 'docx') {
      return require('../../assets/word-icon.png');
    } else if (iconName == 'xls' || iconName == 'xlsx') {
      return require('../../assets/excel-icon.png');
    } else {
      return require('../../assets/picture-icon.png');
    }
  };

  renderOfflineItems = item => {
    console.log('recnet items ', item.item.fileName);
    const { deleteOfflineFile } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View style={{ justifyContent: 'center' }}>
          <Image
            source={this.getIconByName(item.item.fileType)}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 15,
            paddingRight: 15
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: APP_FONTS.FONT_REGULAR,
                color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
                fontWeight: '600',
                fontSize: 18
              }}
              numberOfLines={1}
            >
              {item.item.fileName}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'flex-start', flex: 1 }}>
              <Text
                style={{
                  color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
                  fontFamily: APP_FONTS.FONT_REGULAR,
                  fontWeight: '200'
                }}
              >
                {item.item.dateCreated}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text
                style={{
                  color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
                  fontFamily: APP_FONTS.FONT_REGULAR,
                  fontWeight: '200'
                }}
              >
                {item.item.fileSize}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={deleteOfflineFile}>
            <MaterialCommunityIcons
              name="close"
              size={35}
              color={APP_THEME.APP_BASE_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render = () => {
    const { rowClicked, deleteOfflineFile, items } = this.props;
    return (
      <View style={{ flex: 1, paddingLeft: 15, paddingRight: 10 }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showingSublist: !this.state.showingSublist });
            rowClicked();
          }}
        >
          <View>
            <Text
              style={{
                color: '#999',
                fontFamily: APP_FONTS.FONT_REGULAR,
                fontWeight: '300',
                fontSize: 18
              }}
            >
              4 results found
            </Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderOfflineItems}
        />
      </View>
    );
  };
}

export default OffineFiles;
