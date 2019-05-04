import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { APP_THEME } from '../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabbarButton = ({ isSelected, name, tabClicked }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={tabClicked}
    >
      <MaterialCommunityIcons
        name={name}
        size={32}
        color={
          isSelected
            ? APP_THEME.APP_TAB_ICON_COLOR_SELECTED
            : APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
        }
      />
    </TouchableOpacity>
  );
};

export default TabbarButton;
