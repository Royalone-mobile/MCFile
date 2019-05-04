import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { APP_FONTS } from '../constants';

const ColorButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.redBackground} onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: APP_FONTS.FONT_BOLD
  },
  redBackground: {
    backgroundColor: '#BE2727',
    alignItems: 'center',
    borderRadius: 10,
    fontWeight: 'bold'
  }
};

export default ColorButton;
