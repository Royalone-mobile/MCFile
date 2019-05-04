import React from 'react';
import { View, TextInput } from 'react-native';
import { APP_FONTS } from '../constants';

const Input = ({
  placeholder,
  isShowBorder,
  secureTextEntry,
  value,
  onChangeText,
  placeholderTextColor = 'white',
  textColor = 'white'
}) => {
  renderBorder = () => {
    if (isShowBorder) {
      return <View style={styles.textBorder} />;
    }
  };

  return (
    <View style={styles.viewPadding}>
      <TextInput
        style={[
          styles.textFont,
          {
            color: textColor,
            fontFamily: APP_FONTS.FONT_LIGHT,
            fontWeight: '200'
          }
        ]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {this.renderBorder()}
    </View>
  );
};

const styles = {
  viewPadding: {
    paddingTop: 15,
    paddingBottom: 15
  },
  textBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingTop: 5
  },
  textFont: {
    fontSize: 16
  }
};

export default Input;
