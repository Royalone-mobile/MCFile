import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { APP_FONTS } from '../constants';

const Button = ({
  title,
  onPress,
  textColor = 'white',
  textDecorationLine = 'none'
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.textStyle,
            {
              color: textColor,
              textDecorationLine: textDecorationLine,
              fontFamily: APP_FONTS.FONT_REGULAR
            }
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 14
  }
};

export default Button;
