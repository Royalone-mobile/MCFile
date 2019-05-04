import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { APP_FONTS, APP_THEME } from '../../constants';
import IconButton from '../../component/IconButton';
import DashboardSubList from './DashboardSubList';
import { Ionicons } from '@expo/vector-icons';

class DashboardListRow extends Component {
  state = { showingSublist: false };

  _keyExtractor = (item, index) => `${index}`;

  renderDashboardItems = item => {
    const { subRowClicked } = this.props;
    return (
      <DashboardSubList
        rowClicked={() => {
          subRowClicked(item);
        }}
        item={{ ...item }}
      />
    );
  };

  renderSubList = () => {
    const {
      item: {
        isOpen,
        item: { listaTipologia }
      }
    } = this.props;

    if (this.state.showingSublist) {
      return (
        <FlatList
          style={{ flex: 1, paddingLeft: 15 }}
          data={listaTipologia}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderDashboardItems}
        />
      );
    }
  };

  render = () => {
    const {
      rowClicked,
      item: {
        isOpen,
        item: { id, nome, listaTipologia }
      }
    } = this.props;
    console.log('OPENED', isOpen);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showingSublist: !this.state.showingSublist });
            rowClicked();
          }}
        >
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                fontFamily: APP_FONTS.FONT_REGULAR,
                fontWeight: '400',
                fontSize: 20,
                color: '#4D4D4D'
              }}
            >
              {nome}
            </Text>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
              <Ionicons
                name={
                  this.state.showingSublist === true
                    ? 'ios-arrow-down'
                    : 'ios-arrow-forward'
                }
                size={32}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableOpacity>
        {this.renderSubList()}
      </View>
    );
  };
}

export default DashboardListRow;
