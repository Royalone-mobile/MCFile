import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { APP_FONTS, APP_THEME } from '../constants';

const IconFile = ({ fileName, onPress, isShowImage, fileType }) => {
  console.log(fileName);

  getIconByName = fileType => {
    if (fileType == 'xls' || fileType == 'xlsx') {
      return require('../../assets/excel-icon.png');
    }
    if (fileType == 'doc' || fileType == 'docx') {
      return require('../../assets/word-icon.png');
    } else {
      return require('../../assets/pdf-icon.png');
    }
  };
  renderIconFile = (iconFileName, isShowImage, fileType) => {
    console.log('MAX ', isShowImage);
    if (iconFileName != undefined && isShowImage) {
      return (
        <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5 }}>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.viewStyle, styles.viewFlex]}
          >
            {isShowImage ? (
              <Image
                source={this.getIconByName(fileType)}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <View />
            )}
            <View style={{ flex: 2, paddingLeft: 5, justifyContent: 'center' }}>
              <Text
                style={{
                  fontFamily: APP_FONTS.FONT_REGULAR,
                  color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
                }}
                numberOfLines={1}
              >
                {iconFileName}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (iconFileName != undefined && isShowImage == false) {
      return (
        <View
          style={{
            width: 40,
            paddingTop: 5,
            paddingBottom: 5,
            alignSelf: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity onPress={onPress} style={styles.viewStyle}>
            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontFamily: APP_FONTS.FONT_REGULAR,
                  alignSelf: 'center'
                }}
                numberOfLines={1}
              >
                {iconFileName}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5 }} />;
    }
  };

  return (
    <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
      {this.renderIconFile(fileName, isShowImage, fileType)}
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 14
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 8,
    borderColor: '#999',
    borderWidth: 1.2,
    borderRadius: 25
  },
  viewFlex: {
    flex: 1
  }
};

export default IconFile;
