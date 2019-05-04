import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { APP_THEME, APP_FONTS } from '../../constants';
import SearchBar from '../../component/SearchBar';

class SearchController extends Component {
	state = {
		showingSublist: false,
		searchText: '',
		items: ['mcfile', 'pfizer proposal', 'samsung contract', 'general motors request']
	};

	_keyExtractor = (item, index) => `${index}`;

	renderRecentItems = item => {
		console.log('recnet items ', item.item);
		return (
			<View style={{ flexDirection: 'row', height: 34, marginTop: 10 }}>
				<TouchableOpacity
					style={{
						flexDirection: 'row',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<View>
						<MaterialCommunityIcons name="clock-outline" size={22} color="#4D4D4D" />
					</View>
					<View
						style={{
							flex: 1,
							paddingLeft: 15
						}}
					>
						<Text style={{ fontSize: 18, fontWeight: '300' }}>
							{item.item}
						</Text>
					</View>
				</TouchableOpacity>

				<View style={{ justifyContent: 'center' }}>
					<TouchableOpacity onPress={() => {}}>
						<MaterialCommunityIcons name="close" size={28} color="#4D4D4D" />
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	renderNavigationBar = () => {
		return (
			<View
				style={{
					height: 64,
					backgroundColor: APP_THEME.APP_BASE_COLOR_WHITE,
					borderBottomWidth: 0.5,
					borderBottomColor: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
					shadowColor: '#000',
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.3,
					shadowRadius: 5
				}}
			>
				<View
					style={{
						paddingLeft: 15,
						marginTop: 20,
						flex: 1,
						justifyContent: 'flex-start',
						alignItems: 'center',
						flexDirection: 'row'
					}}
				>
					<TouchableOpacity
						onPress={() => {
							this.props.onModalDismiss();
						}}
						style={{
							paddingLeft: 5,
							paddingRight: 5
						}}
					>
						<Ionicons name="ios-arrow-back" color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED} size={32} />
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
							paddingLeft: 10,
							marginLeft: 15,
							borderLeftWidth: 0.5,
							borderLeftColor: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
						}}
					>
						<TextInput
							style={{
								color: 'black',
								fontSize: 16,
								flex: 1,
								fontFamily: APP_FONTS.FONT_REGULAR
							}}
							returnKeyType="search"
							underlineColorAndroid="transparent"
							onChangeText={newText => {}}
							placeholder="Search in McFile"
							clearButtonMode="always"
							onEndEditing={() => {}}
						/>
					</View>
				</View>
			</View>
		);
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.renderNavigationBar()}
				<View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
					<Text
						style={{
							color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
							fontFamily: APP_FONTS.FONT_SEMIBOLD,
							fontSize: 18,
							paddingTop: 20
						}}
					>
						Recent Searches
					</Text>
					<FlatList
						style={{ flex: 1 }}
						data={this.state.items}
						keyExtractor={this._keyExtractor}
						renderItem={this.renderRecentItems}
					/>
				</View>
			</View>
		);
	}
}

export default SearchController;
