import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { APP_FONTS, APP_THEME } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class DashboardSubList extends Component {
	renderIcon = item => {
		const { icon } = item;
		return <Ionicons name="md-document" size={32} color="#4D4D4D" />;
	};

	render = () => {
		const { rowClicked, item: { item: { id, nome, quantidade, icone } } } = this.props;
		return (
			<View>
				<TouchableOpacity onPress={rowClicked}>
					<View
						style={{
							paddingTop: 10,
							paddingBottom: 10,
							flexDirection: 'row',
							alignItems: 'center'
						}}
					>
						{/* <Image source = {imagePath} style={{width:20, height:25}} /> */}

						{this.renderIcon({ icone })}
						<Text
							style={{
								fontFamily: APP_FONTS.FONT_REGULAR,
								fontWeight: '200',
								fontSize: 20,
								color: '#4D4D4D',
								paddingLeft: 15
							}}
						>
							{nome}
						</Text>
						<View
							style={{
								alignItems: 'flex-end',
								flex: 1,
								justifyContent: 'center',
								marginRight: 10
							}}
						>
							<View
								style={{
									borderRadius: 16,
									backgroundColor: 'green',
									padding: 5,
									paddingLeft: 10,
									paddingRight: 10
								}}
							>
								<Text style={{ color: 'white', fontFamily: APP_FONTS.FONT_BOLD }}>
									{quantidade}
								</Text>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	};
}

export default DashboardSubList;
