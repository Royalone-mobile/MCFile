import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { APP_THEME, APP_FONTS } from '../constants';

const IconButton = ({ iconPath, onPress, disable }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disable && disable}>
        <Image source={iconPath} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default IconButton;
