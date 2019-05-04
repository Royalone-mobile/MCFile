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
    ScrollView,
    WebView
  } from 'react-native';

  import { APP_THEME, APP_FONTS } from '../../constants';
  import {
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons
  } from '@expo/vector-icons';

  import SearchBar from '../../component/SearchBar';
  


class DisplayPDF extends Component {

    renderNavigationBar = () => {
        return (
          <View style={{ height: 64, backgroundColor: APP_THEME.APP_COLOR_DARK_BLACK }}>
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
                  this.props.navigation.pop();
                }}
              >
                <MaterialCommunityIcons name="close" color="white" size={32} />
              </TouchableOpacity>
              <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, flexDirection:"row", alignItems:'center' }}>
                <Text style={{color:'white',fontSize:16, flex:1}}>United State Envir....</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="share-variant" color="white" size={32} style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="folder-download" color="white" size={32} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      };

    render() {
        return(
            <View style={{ flex:1}}>
                {this.renderNavigationBar()}
                <WebView source={require('../../../assets/sample.pdf')}>

                </WebView>
            </View>
        )
    }
}

export default DisplayPDF;