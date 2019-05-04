import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	RefreshControl,
	TextInput,
	Alert,
	AsyncStorage,
	Modal
} from 'react-native';
import SampleData from './sample.json';
import DashboardListRow from './DashboardListRow';
import { APP_THEME, APP_FONTS } from '../../constants';
import SearchBar from '../../component/SearchBar';
import { getSearchDocumentListing } from '../../services/mcFileClient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchController from '../searchController';

class Dashboard extends Component {
	state = {
		searchString: '',
		loading: false,
		documents: [],
		refreshing: false,
		modalVisible: false,
		logoutPopUpVisible: false
	};

	_keyExtractor = (item, index) => `${index}`;

	componentDidMount = () => {
		console.log('LOAD DUCOMENTS');
		this.loadDocuments();
	};

	loadDocuments = async () => {
		try {
			const idSessao = await AsyncStorage.getItem('idSessao');
			this.setState({ loading: true });
			const response = await getSearchDocumentListing(this.state.searchString, idSessao);
			console.log('API RESPONSE', response.data);
			this.setState({ loading: false, refreshing: false });
			if (response.data) {
				this.setState({ documents: response.data });
			}
		} catch (error) {
			console.log('ERROR', error);
			this.setState({ loading: false, refreshing: false });
		}
	};

	makeAppLogout = async () => {
		this.setState({ logoutPopUpVisible: false });
		await AsyncStorage.removeItem('EMAIL');
		await AsyncStorage.removeItem('PASSWORD');
		await AsyncStorage.removeItem('idSessao');
		this.props.navigation.navigate('Auth');
	};

	subRowClicked = subItem => {
		if (this.props.isSearchModal) {
			const { filterSelected } = this.props;
			filterSelected(subItem);
		} else {
			this.props.navigation.navigate('Search');
		}
	};

	renderDashboardItems = item => {
		return (
			<DashboardListRow
				rowClicked={() => {
					item.isOpen = !item.isOpen;
				}}
				subRowClicked={this.subRowClicked}
				item={{ ...item, isOpen: false }}
			/>
		);
	};

	renderNavigationBar = () => {
		if (this.props.isSearchModal) {
			return;
		}
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
							color: 'white',
							fontSize: 32,
							fontWeight: 'bold',
							alignSelf: 'center',
							justifyContent: 'flex-start',
							flex: 1
						}}
					>
						McFile
					</Text>
					<View
						style={{
							width: 30,
							height: 30,
							marginRight: 10,
							alignSelf: 'center'
						}}
					>
						<TouchableOpacity
							onPress={() => {
								this.setState({
									logoutPopUpVisible: !this.state.logoutPopUpVisible
								});
							}}
						>
							<Image
								style={{
									width: 30,
									height: 30,
									borderRadius: 15,
									resizeMode: 'contain'
								}}
								source={{
									uri: this.props.auth.userData.avatar
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	};

	renderSearchBarButton = () => {
		if (this.props.isSearchModal) {
			return;
		}
		return (
			<View style={{ height: 40 }}>
				<TouchableOpacity
					onPress={() => {
						this.setState({ modalVisible: true });
					}}
				>
					<View
						style={[
							{
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: 'white',
								margin: 5
							},
							{ borderRadius: 10 }
						]}
					>
						<Ionicons
							style={{ padding: 5, paddingLeft: 10 }}
							name="ios-search"
							size={20}
							color={APP_THEME.APP_BASE_COLOR}
						/>
						<Text
							style={{
								color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
								fontSize: 16,
								paddingLeft: 5,
								flex: 1,
								fontFamily: APP_FONTS.FONT_REGULAR,
								fontWeight: '300'
							}}
						>
							Search in McFile
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	renderSearchModal = () => {
		if (this.state.modalVisible) {
			return (
				<Modal
					animationType="fade"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}
				>
					<SearchController
						onModalDismiss={() => {
							this.setState({ modalVisible: false });
						}}
					/>
				</Modal>
			);
		}
	};

	renderPopUpMenu = () => {
		if (this.state.logoutPopUpVisible) {
			return (
				<TouchableOpacity
					onPress={() => {
						this.setState({
							logoutPopUpVisible: false
						});
					}}
					style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'transparent' }}
				>
					<View
						style={{
							backgroundColor: 'clear',
							zIndex: 10,
							position: 'absolute',
							width: '99%',
							alignItems: 'flex-end',
							justifyContent: 'center',
							marginTop: 64,
							height: 45,
							paddingRight: 10
						}}
					>
						<View
							style={{
								width: 150,
								flex: 1,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: { width: 4, height: 2 },
								shadowOpacity: 0.5,
								shadowRadius: 5
							}}
						>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									flex: 1,
									alignItems: 'center'
								}}
								onPress={() => {
									this.makeAppLogout();
								}}
							>
								<MaterialCommunityIcons
									style={{ padding: 10, paddingLeft: 10 }}
									name="logout"
									size={20}
									color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
								/>
								<Text
									style={{
										fontFamily: APP_THEME.FONT_REGULAR,
										fontSize: 18,
										fontWeight: '400',
										color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
										paddingLeft: 15
									}}
								>
									Log out
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableOpacity>
			);
		}
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.renderSearchModal()}
				{this.renderNavigationBar()}
				<View style={{ borderBottomColor: '#999', borderBottomWidth: 0.5 }}>
					{this.renderSearchBarButton()}
				</View>
				<Loader loading={this.state.loading} />
				<FlatList
					style={{ flex: 1, paddingLeft: 15, paddingRight: 5 }}
					data={this.state.documents}
					keyExtractor={this._keyExtractor}
					renderItem={this.renderDashboardItems}
					refreshing={this.state.refreshing}
					onRefresh={() => {
						this.setState({ refreshing: true });
						this.loadDocuments();
					}}
				/>
				{this.renderPopUpMenu()}
			</View>
		);
	}
}

export default Dashboard;
