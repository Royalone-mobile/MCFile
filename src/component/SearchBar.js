import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { APP_THEME, APP_FONTS } from '../constants';

const SearchBar = ({
  value,
  onChangeText,
  autoCorrect,
  placeholder,
  onEndEditing
}) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={{ height: 40 }}>
      <View style={[containerStyle, { borderRadius: 10 }]}>
        <Ionicons
          style={{ padding: 5, paddingLeft: 10 }}
          name="ios-search"
          size={20}
          color={APP_THEME.APP_BASE_COLOR}
        />
        <TextInput
          style={inputStyle}
          returnKeyType="search"
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          value={value}
          autoCorrect={autoCorrect}
          placeholder={placeholder}
          clearButtonMode="always"
          onEndEditing={onEndEditing}
        />
      </View>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 5,
    flex: 1,
    fontFamily: APP_FONTS.FONT_REGULAR
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 5
  }
};

export default SearchBar;
