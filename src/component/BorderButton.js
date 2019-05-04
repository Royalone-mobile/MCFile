import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { APP_FONTS } from '../constants';

const BorderButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.border} onPress={onPress}>
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
  border: {
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    fontWeight: 'bold'
  }
};

export default BorderButton;
