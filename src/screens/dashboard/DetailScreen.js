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
	Modal,
	ScrollView
} from 'react-native';
import { APP_THEME, APP_FONTS } from '../../constants';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

import SearchBar from '../../component/SearchBar';

class DetailScreen extends Component {
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
				</View>
			</View>
		);
	};

	getIconByName = iconName => {
		console.log('MAXICON ', iconName);
		if (iconName == 'pdf') {
			return require('../../../assets/pdf-icon.png');
		} else if (iconName == 'doc' || iconName == 'docx') {
			return require('../../../assets/word-icon.png');
		} else if (iconName == 'xls' || iconName == 'xlsx') {
			return require('../../../assets/excel-icon.png');
		} else {
			return require('../../../assets/picture-icon.png');
		}
	};

	showPDF = () => {
		this.props.navigation.push('DisplayPDF');
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.renderNavigationBar()}

				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
					<MaterialCommunityIcons name="file-document-box" size={32} color="#4D4D4D" />

					<Text style={{ fontWeight: 'bold', fontSize: 16, fontFamily: APP_FONTS.FONT_REGULAR }}>
						McFile Cloud, Guarda e digitalizacao de...
					</Text>

					<TouchableOpacity>
						<MaterialCommunityIcons name="share-variant" size={32} color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED} />
					</TouchableOpacity>
				</View>

				<View style={{ height: 250 }}>
					<ScrollView horizontal="true">
						<TouchableOpacity onPress={this.showPDF}>
							<View
								style={{
									width: 160,
									height: 200,
									margin: 10,
									borderWidth: 1,
									borderColor: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
								}}
							>
								<View style={{ width: '100%', position: 'absolute', zIndex: 999, alignItems: 'flex-end' }}>
									<TouchableOpacity>
										<MaterialCommunityIcons name="share-variant" size={25} color="#4D4D4D" />
									</TouchableOpacity>
								</View>
								<View style={{ backgroundColor: APP_THEME.APP_BASE_COLOR_LIGHT_GREY, flex: 1 }} />
								<View
									style={{
										backgroundColor: 'white',
										alignItems: 'center',
										flexDirection: 'row',
										padding: 5,
										justifyContent: 'center'
									}}
								>
									<Image source={this.getIconByName('pdf')} style={{ width: 20, height: 20 }} />

									<Text style={{ paddingLeft: 5 }}>Relatorio de Janeiro</Text>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={this.showPDF}>
							<View
								style={{
									width: 160,
									height: 200,
									margin: 10,
									borderWidth: 1,
									borderColor: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
								}}
							>
								<View style={{ width: '100%', position: 'absolute', zIndex: 999, alignItems: 'flex-end' }}>
									<TouchableOpacity>
										<MaterialCommunityIcons name="share-variant" size={25} color="#4D4D4D" />
									</TouchableOpacity>
								</View>
								<View style={{ backgroundColor: APP_THEME.APP_BASE_COLOR_LIGHT_GREY, flex: 1 }} />
								<View
									style={{
										backgroundColor: 'white',
										alignItems: 'center',
										flexDirection: 'row',
										padding: 5,
										justifyContent: 'center'
									}}
								>
									<Image source={this.getIconByName('doc')} style={{ width: 20, height: 20 }} />

									<Text style={{ paddingLeft: 5 }}>Relatorio de Janeiro</Text>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={this.showPDF}>
							<View
								style={{
									width: 160,
									height: 200,
									margin: 10,
									borderWidth: 1,
									borderColor: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
								}}
							>
								<View style={{ width: '100%', position: 'absolute', zIndex: 999, alignItems: 'flex-end' }}>
									<TouchableOpacity>
										<MaterialCommunityIcons name="share-variant" size={25} color="#4D4D4D" />
									</TouchableOpacity>
								</View>
								<View style={{ backgroundColor: APP_THEME.APP_BASE_COLOR_LIGHT_GREY, flex: 1 }} />
								<View
									style={{
										backgroundColor: 'white',
										alignItems: 'center',
										flexDirection: 'row',
										padding: 5,
										justifyContent: 'center'
									}}
								>
									<Image source={this.getIconByName('xls')} style={{ width: 20, height: 20 }} />

									<Text style={{ paddingLeft: 5 }}>Relatorio de Janeiro</Text>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={this.showPDF}>
							<View
								style={{
									width: 160,
									height: 200,
									margin: 10,
									borderWidth: 1,
									borderColor: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED
								}}
							>
								<View style={{ width: '100%', position: 'absolute', zIndex: 999, alignItems: 'flex-end' }}>
									<TouchableOpacity>
										<MaterialCommunityIcons name="share-variant" size={25} color="#4D4D4D" />
									</TouchableOpacity>
								</View>
								<View style={{ backgroundColor: APP_THEME.APP_BASE_COLOR_LIGHT_GREY, flex: 1 }} />
								<View
									style={{
										backgroundColor: 'white',
										alignItems: 'center',
										flexDirection: 'row',
										padding: 5,
										justifyContent: 'center'
									}}
								>
									<Image source={this.getIconByName('pdf')} style={{ width: 20, height: 20 }} />

									<Text style={{ paddingLeft: 5 }}>Relatorio de Janeiro</Text>
								</View>
							</View>
						</TouchableOpacity>
					</ScrollView>
				</View>
				<View style={{ padding: 10 }}>
					<View style={[styles.marginTopBottom, { flexDirection: 'row', justifyContent: 'space-between' }]}>
						<Text style={[styles.defaultFont, styles.boldFont]}>Reference Number</Text>
						<Text style={[styles.defaultFont, styles.greyFontColor]}>Destaque-201808-26</Text>
					</View>
					<View style={[styles.marginTopBottom, { flexDirection: 'row', justifyContent: 'space-between' }]}>
						<Text style={[styles.defaultFont, styles.boldFont]}>Type</Text>
						<Text style={[styles.defaultFont, styles.greyFontColor]}>Guia</Text>
					</View>
					<View style={[styles.marginTopBottom, { flexDirection: 'row', justifyContent: 'space-between' }]}>
						<Text style={[styles.defaultFont, styles.boldFont]}>Description</Text>
						<Text style={[styles.defaultFont, styles.greyFontColor]}> Processo de vendas Gest..</Text>
					</View>
					<View style={[styles.marginTopBottom, { flexDirection: 'row', justifyContent: 'space-between' }]}>
						<Text style={[styles.defaultFont, styles.boldFont]}>Company</Text>
						<Text style={[styles.defaultFont, styles.greyFontColor]}>1- Destaque Gestao Document..</Text>
					</View>
					<View style={[styles.marginTopBottom, { flexDirection: 'row', justifyContent: 'space-between' }]}>
						<Text style={[styles.defaultFont, styles.boldFont]}>Matter</Text>
						<Text style={[styles.defaultFont, styles.greyFontColor]}>Comerical</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	marginTopBottom: {
		marginTop: 10,
		marginBottom: 10
	},
	defaultFont: {
		fontSize: 16,
		fontFamily: APP_FONTS.FONT_REGULAR
	},
	boldFont: {
		fontWeight: 'bold'
	},
	greyFontColor: {
		color: APP_THEME.APP_BASE_COLOR_LIGHT_GREY
	},

	viewBorder: {
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		borderColor: '#999'
	},
	viewRow: {
		paddingLeft: 5,
		paddingRight: 5
	},
	box: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: 8
	}
};

export default DetailScreen;
