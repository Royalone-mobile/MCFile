import React, { Component } from 'react';
import { View, Image, Text, NetInfo, NativeModules, TouchableOpacity } from 'react-native';
import { APP_THEME, APP_FONTS } from '../../constants';
import RecentListRow from './RecentListRow';
import OfflineFiles from '../../component/OfflineFiles';
import SearchBar from '../../component/SearchBar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

class FolderScreen extends Component {
	state = {
		deletePopUpVisibility: false,
		searchString: '',
		recentItems: ['mcfile', 'pfizer proposal', 'samsung contract', 'general motors request'],
		offlineFiles: [
			{
				fileName: 'Metricas de agosto.xlsx',
				dateCreated: '04/08/2018',
				fileSize: '425KB',
				fileType: 'xlsx'
			},
			{
				fileName: 'Relatorio de agosto - refilter name',
				dateCreated: '04/08/2018',
				fileSize: '425KB',
				fileType: 'doc'
			},
			{
				fileName: 'Relatorio de agosto - refilter name',
				dateCreated: '04/08/2018',
				fileSize: '2.3 MB',
				fileType: 'pdf'
			},
			{
				fileName: 'Foto1.jpg',
				dateCreated: '04/08/2018',
				fileSize: '1.3 MB',
				fileType: 'jpg'
			}
		]
	};

	deleteOfflineFile = () => {
		console.log('file deleted.');
	};

	renderPopUpMenu = () => {
		if (this.state.deletePopUpVisibility) {
			return (
				<TouchableOpacity
					onPress={() => {
						this.setState({
							deletePopUpVisibility: false
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
								width: 280,
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
								onPress={() => {}}
							>
								<Text
									style={{
										fontFamily: APP_THEME.FONT_REGULAR,
										fontSize: 18,
										fontWeight: '400',
										color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
										paddingLeft: 15
									}}
								>
									Delete all files from this device
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableOpacity>
			);
		}
	};

	renderNavigationBar = () => {
		return (
			<View style={{ height: 64, backgroundColor: APP_THEME.APP_BASE_COLOR }}>
				<View
					style={{
						paddingLeft: 15,
						marginTop: 20,
						flex: 1,
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<Text
						style={{
							color: APP_THEME.APP_BASE_COLOR_WHITE,
							fontFamily: APP_FONTS.FONT_MEDIUM,
							fontSize: 22
						}}
					>
						Offline Files
					</Text>
					<TouchableOpacity
						onPress={() => {
							this.setState({
								deletePopUpVisibility: !this.state.deletePopUpVisibility
							});
						}}
					>
						<MaterialIcons
							style={{ padding: 10, paddingLeft: 10 }}
							name="more-vert"
							size={30}
							color={APP_THEME.APP_BASE_COLOR_WHITE}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	render() {
		console.log('recentItems', this.state.recentItems);
		return (
			<View style={{ flex: 1 }}>
				{this.renderNavigationBar()}
				<SearchBar
					placeholder="Search in McFile"
					onChangeText={searchString => {
						this.setState({ searchString });
					}}
					value={this.state.searchString}
					autoCorrect={false}
					onEndEditing={() => {}}
				/>
				<OfflineFiles items={this.state.offlineFiles} deleteOfflineFile={this.deleteOfflineFile} />
				{this.renderPopUpMenu()}
			</View>
		);
	}
}

export default FolderScreen;
