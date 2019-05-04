import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { APP_THEME, APP_FONTS } from '../constants';
import SearchBar from './SearchBar';

class SearchModal extends Component {
  state = {
    searchString: '',
    loading: false,
    items: ['VALUE1', 'VALUE2', 'VALUE3']
  };

  _keyExtractor = (item, index) => `${index}`;

  componentDidMount = () => {};

  renderSearchItems = item => {
    return (
      <TouchableOpacity
        style={{
          height: 44,
          justifyContent: 'center',
          paddingLeft: 15
        }}
        onPress={() => {
          this.props.itemSelected(item);
        }}
      >
        <Text
          style={{
            color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
            fontFamily: APP_FONTS.FONT_REGULAR,
            fontWeight: '400',
            fontSize: 16
          }}
        >
          {item.item}
        </Text>
      </TouchableOpacity>
    );
  };

  renderNavigationBar = () => {
    return (
      <View style={{ height: 64, backgroundColor: APP_THEME.APP_BASE_COLOR }}>
        <View
          style={{
            paddingLeft: 15,
            marginTop: 20,
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              color: APP_THEME.APP_BASE_COLOR_WHITE,
              fontFamily: APP_FONTS.FONT_MEDIUM,
              fontSize: 18,
              alignSelf: 'center',
              justifyContent: 'flex-start',
              flex: 1
            }}
          >
            {this.props.title.toUpperCase()}
          </Text>
          <View
            style={{
              marginRight: 10,
              alignSelf: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.cancelClicked();
              }}
            >
              <Text
                style={{
                  color: APP_THEME.APP_BASE_COLOR_WHITE,
                  fontFamily: APP_FONTS.FONT_MEDIUM,
                  fontSize: 18
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderSearchBarButton = () => {
    return <SearchBar />;
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE'
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderNavigationBar()}
        <View style={{ borderBottomColor: '#999', borderBottomWidth: 0.5 }}>
          {this.renderSearchBarButton()}
        </View>
        <Text
          style={{
            paddingLeft: 13,
            paddingTop: 10,
            color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
            fontFamily: APP_FONTS.FONT_REGULAR,
            fontWeight: '300',
            fontSize: 16
          }}
        >
          3 results found.
        </Text>
        <Loader loading={this.state.loading} />
        <FlatList
          style={{ flex: 1, paddingRight: 5, paddingTop: 10 }}
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderSearchItems}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

export default SearchModal;
