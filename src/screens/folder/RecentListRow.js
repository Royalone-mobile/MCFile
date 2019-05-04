import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { APP_FONTS, APP_THEME } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class RecentListRow extends Component {
  state = { showingSublist: false };

  _keyExtractor = (item, index) => `${index}`;

  renderRecentItems = item => {
      console.log('recnet items ',item.item);
    return(
        <View style={{flexDirection:"row",padding: 5}}>
            <View style={{justifyContent: 'center'}}>
                <MaterialCommunityIcons name="clock-outline" size={22} color="#4D4D4D" />
            </View>
            <View style={{flex:1, justifyContent:'center',paddingLeft:10}}>
                <Text>{item.item}</Text>
            </View>
            
            <View style={{justifyContent: 'center'}}>
                <MaterialCommunityIcons name="close" size={28} color="#4D4D4D" />
            </View>
        </View>
    );
  };

  render = () => {
    const {
      rowClicked,
      items
    } = this.props;
    return (
      <View style={{flex: 1,paddingLeft: 10, paddingRight: 10}}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showingSublist: !this.state.showingSublist });
            rowClicked();
          }}
        >
        <View>
            <Text style={{
                fontWeight:"bold",
                fontFamily: APP_FONTS.FONT_REGULAR,
                fontSize: 20}}
            >Recent Searches</Text>
        </View>
        </TouchableOpacity>

        <FlatList
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRecentItems}
        />
      </View>
    );
  };
}

export default RecentListRow;
