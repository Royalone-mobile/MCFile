import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { APP_FONTS, APP_THEME } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconFile from '../../component/IconFile';
class SearchRow extends Component {
	_keyExtractor = (item, index) => `${index}`;

	renderFiles = item => {
		console.log('RENDER', item.fileName);
		const { onPress } = this.props;
		return <IconFile fileName={item.item.fileName} isShowImage={item.item.isShowImage} fileType={item.item.fileType} />;
	};

	getGridData = (data, column) => {
		if (data) {
			var gridData = [...data];

			if (gridData.length > 4) {
				const newGridData = gridData.splice(0, 3);
				const remainingCounts = data.length - 3;
				const lastData = {
					...data[3],
					fileName: '+' + remainingCounts,
					isShowImage: false
				};
				gridData = [...newGridData, lastData];
			}

			var count = gridData.length % column;
			if (count > 0) {
				for (let i = 0; i < column - count; i++) {
					gridData.push({});
				}
			}
			return gridData;
		}
		return [];
	};

	render = () => {
		const { item, onFileSharePopup, onPress } = this.props;

		return (
			<TouchableOpacity style={styles.viewBorder} onPress={onPress}>
				<View style={styles.viewRow}>
					<View style={{ flex: 1 }}>
						<MaterialCommunityIcons name="file-document-box" size={32} color="#4D4D4D" />
					</View>
					<View style={{ flex: 6 }}>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 16,
								fontFamily: APP_FONTS.FONT_REGULAR
							}}
						>
							{item.item.title}
						</Text>
						<Text
							style={{
								color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
								paddingTop: 5,
								fontFamily: APP_FONTS.FONT_REGULAR
							}}
						>
							{item.item.description}
						</Text>
						<View style={styles.box}>
							<Text
								style={{
									color: APP_THEME.APP_TAB_ICON_COLOR_DESELECTED,
									fontFamily: APP_FONTS.FONT_REGULAR
								}}
							>
								{item.item.author}
							</Text>
							<MaterialCommunityIcons name="calendar" size={25} color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED} />
							<Text>
								{item.item.createDate}
							</Text>
						</View>
					</View>
					<View style={{ flex: 1 }}>
						<TouchableOpacity onPress={onFileSharePopup}>
							<MaterialCommunityIcons name="share-variant" size={32} color={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED} />
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={{ flex: 1 }}>
						<FlatList
							style={{ flex: 1, marginTop: 10 }}
							data={this.getGridData(item.item.files, 2)}
							keyExtractor={this._keyExtractor}
							renderItem={this.renderFiles}
							numColumns={2}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
}

const styles = {
	viewBorder: {
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		borderColor: '#999'
	},
	viewRow: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 5,
		paddingBottom: 5
	},
	box: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: 8
	}
};

export default SearchRow;
