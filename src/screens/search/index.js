import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import IconFile from '../../component/IconFile';
import SearchData from './search.json';
import SearchRow from './SearchRow';
import { APP_THEME, APP_FONTS } from '../../constants';
import SearchBar from '../../component/SearchBar';
import Modal from 'react-native-modal';
import Dashboard from '../dashboard';
import { Dropdown } from 'react-native-material-dropdown';
import ColorButton from '../../component/ColorButton';

class Search extends Component {
	state = { showModal: false, showFileModal: false, isChecked: true };
	_keyExtractor = (item, index) => `${index}`;

	renderIcon = item => {
		return <MaterialCommunityIcons name={item} size={32} color="#4D4D4D" />;
	};

	showAllFiles = () => {
		console.log('index.js max.');
		this.props.navigation.push('DetailScreen');
	};

	renderSearchItems = item => {
		return <SearchRow item={item} onPress={this.showAllFiles} onFileSharePopup={this.renderShareFileModal} />;
	};

	renderModal = () => {
		return (
			<Modal
				isVisible={this.state.showModal}
				style={{ margin: 0 }}
				onBackdropPress={() => {
					this.setState({ showModal: !this.state.showModal });
				}}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: 'white',
						width: '80%',
						marginTop: 64,
						alignSelf: 'flex-end'
					}}
				>
					<Dashboard
						isSearchModal={true}
						filterSelected={item => {
							this.setState({ showModal: false });
						}}
					/>
				</View>
			</Modal>
		);
	};

	setCheckboxStatus = () => {
		this.setState({ isChecked: !this.state.isChecked });
	};
	renderCheckBox = () => {
		if (this.state.isChecked) {
			return <Image source={require('../../../assets/selected-icon.png')} style={{ width: 15, height: 15 }} />;
		} else {
			return <Image source={require('../../../assets/not-selected-icon.png')} style={{ width: 15, height: 15 }} />;
		}
	};

	renderUnSelectedCheckBox = () => {
		if (this.state.isChecked) {
			return <Image source={require('../../../assets/not-selected-icon.png')} style={{ width: 15, height: 15 }} />;
		} else {
			return <Image source={require('../../../assets/selected-icon.png')} style={{ width: 15, height: 15 }} />;
		}
	};

	showShareFileModal = () => {
		return (
			<Modal
				isVisible={this.state.showFileModal}
				onBackdropPress={() => {
					this.setState({ showFileModal: !this.state.showFileModal });
				}}
				style={{ margin: 0, justifyContent: 'flex-end' }}
			>
				<View style={{ height: 300, backgroundColor: 'white' }}>
					<View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity onPress={this.renderShareFileModal}>
							<MaterialCommunityIcons name="close" size={35} color={APP_THEME.APP_COLOR_DARK_BLACK} />
						</TouchableOpacity>
						<Text style={{ fontFamily: APP_FONTS.FONT_REGULAR, fontSize: 25, paddingLeft: 20 }}>Share</Text>
						<Text style={{ fontFamily: APP_FONTS.FONT_REGULAR, fontSize: 25, fontWeight: 'bold', paddingLeft: 10 }}>
							File
						</Text>
					</View>

					<View style={{ paddingLeft: 35, marginTop: 10 }}>
						<Text style={{ fontSize: 25, fontFamily: APP_FONTS.FONT_REGULAR }}>Who can view ?</Text>
					</View>
					<View style={{ paddingLeft: 50 }}>
						<TouchableOpacity onPress={this.setCheckboxStatus}>
							<View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
								{this.renderCheckBox()}
								<Text style={{ paddingLeft: 10, fontSize: 16, fontFamily: APP_FONTS.FONT_REGULAR }}>McFile users</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.setCheckboxStatus}>
							<View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
								{this.renderUnSelectedCheckBox()}
								<Text style={{ paddingLeft: 10, fontSize: 16, fontFamily: APP_FONTS.FONT_REGULAR }}>
									Anyone with the link
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ paddingLeft: 35, marginTop: 20 }}>
						<Text style={{ fontSize: 25, fontFamily: APP_FONTS.FONT_REGULAR }}>Link expiration</Text>
						<Text style={{ paddingLeft: 10, fontSize: 16, fontFamily: APP_FONTS.FONT_REGULAR }}>1 Week</Text>
					</View>
					<View style={{ alignItems: 'flex-end', marginRight: 10, marginTop: 10 }}>
						<TouchableOpacity style={styles.redBackground} onPress={this.renderShareFileModal}>
							<Text style={styles.textStyle}>Create link and share</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		);
	};

	createAndShareLink = () => {
		console.log('link share');
		this.renderShareFileModal();
	};
	renderShareFileModal = () => {
		console.log('max sharefile modal');
		this.setState({ showFileModal: !this.state.showFileModal });
	};
	renderNavigationBar = () => {
		return (
			<View style={{ height: 64, backgroundColor: APP_THEME.APP_BASE_COLOR }}>
				<View
					style={{
						marginTop: 20,
						flex: 1,
						justifyContent: 'flex-start',
						alignItems: 'center',
						flexDirection: 'row'
					}}
				>
					<TouchableOpacity
						onPress={() => {
							this.props.navigation.pop();
						}}
						style={{
							width: 60,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Ionicons name="ios-arrow-back" color="white" size={32} />
					</TouchableOpacity>
					<View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
						<SearchBar placeholder="Search in documents" onChangeText={text => {}} autoCorrect={false} />
					</View>
					<TouchableOpacity
						onPress={() => {
							this.setState({ showModal: !this.state.showModal });
						}}
						style={{
							width: 60,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<MaterialIcons name="filter-list" color="white" size={32} />
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	render() {
		let data = [
			{
				value: '1 Week'
			},
			{
				value: '2 Week'
			},
			{
				value: '3 Week'
			}
		];

		return (
			<View style={{ flex: 1 }}>
				{this.renderNavigationBar()}
				{this.renderModal()}
				{this.showShareFileModal()}
				<Text
					style={{
						paddingLeft: 15,
						paddingTop: 10,
						color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
						fontFamily: APP_FONTS.FONT_REGULAR,
						fontWeight: '300',
						fontSize: 18
					}}
				>
					392 results found.
				</Text>
				<FlatList
					style={{
						flex: 1,
						marginTop: 10
					}}
					data={SearchData}
					keyExtractor={this._keyExtractor}
					renderItem={this.renderSearchItems}
				/>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		color: 'white',
		fontSize: 14,
		padding: 5,
		paddingLeft: 15,
		paddingRight: 15,
		fontFamily: APP_FONTS.FONT_BOLD
	},
	redBackground: {
		backgroundColor: '#BE2727',
		alignItems: 'center',
		borderRadius: 10,
		fontWeight: 'bold',
		shadowColor: '#000000',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		}
	}
};

export default Search;
