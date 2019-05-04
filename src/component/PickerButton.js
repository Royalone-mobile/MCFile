import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { APP_FONTS, APP_THEME } from '../constants';
import { FontAwesome } from '@expo/vector-icons';

const PickerButton = ({
  title,
  onPress,
  textColor = 'white',
  placeholderTextColor = 'grey',
  textDecorationLine = 'none',
  placeholder = 'Choose'
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
        <Text
          style={[
            styles.textStyle,
            {
              color: title ? textColor : placeholderTextColor,
              textDecorationLine: textDecorationLine,
              fontFamily: APP_FONTS.FONT_REGULAR
            }
          ]}
        >
          {title ? title : placeholder}
        </Text>
        <FontAwesome
          style={{ paddingLeft: 10 }}
          name="caret-down"
          color={title ? textColor : placeholderTextColor}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 14
  }
};

export default PickerButton;
