import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';
import { APP_THEME, APP_FONTS } from '../../constants';
import { Dropdown } from 'react-native-material-dropdown';
import ColorButton from '../../component/ColorButton';
import { Ionicons } from '@expo/vector-icons';
import SearchModal from '../../component/SearchModal';
import PickerButton from '../../component/PickerButton';

class CreateFolder extends Component {
  modalType = {
    NONE: 'none',
    TYPE: 'type',
    COMPANY: 'company',
    MATTER: 'matter',
    RESTRICTEDTO: 'restrictedTo'
  };

  state = {
    currentModalType: 'none',
    fileType: '',
    matter: '',
    company: '',
    restrictedto: '',
    showModal: false
  };

  deleteOfflineFile = () => {
    console.log('file deleted.');
  };

  renderNavigationBar = () => {
    return (
      <View style={{ height: 64, backgroundColor: APP_THEME.APP_BASE_COLOR }}>
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
            style={{
              paddingLeft: 5,
              paddingRight: 5
            }}
          >
            <Ionicons name="ios-arrow-back" color="white" size={32} />
          </TouchableOpacity>
          <Text
            style={{
              color: APP_THEME.APP_BASE_COLOR_WHITE,
              fontFamily: APP_FONTS.FONT_MEDIUM,
              fontSize: 18,
              marginLeft: 10
            }}
          >
            Add to Folder
          </Text>
        </View>
      </View>
    );
  };

  renderSearchModal = () => {
    return (
      <Modal animationType="slide" visible={this.state.showModal}>
        <SearchModal
          title={this.state.currentModalType}
          cancelClicked={() => {
            this.setState({
              showModal: false,
              currentModalType: this.modalType.NONE
            });
          }}
          itemSelected={item => {
            this.modalItemSelected(item);
          }}
        />
      </Modal>
    );
  };

  modalItemSelected = item => {
    if (this.state.currentModalType == this.modalType.TYPE) {
      this.setState({ fileType: item.item });
    } else if (this.state.currentModalType == this.modalType.COMPANY) {
      this.setState({ company: item.item });
    } else if (this.state.currentModalType == this.modalType.MATTER) {
      this.setState({ matter: item.item });
    } else if (this.state.currentModalType == this.modalType.RESTRICTEDTO) {
      this.setState({ restrictedto: item.item });
    } else {
    }
    this.setState({ currentModalType: this.modalType.NONE, showModal: false });
  };

  render() {
    console.log('recentItems', this.state.recentItems);
    let data = [
      {
        value: 'File 1'
      },
      {
        value: 'File 2'
      },
      {
        value: 'File 3'
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        {this.renderNavigationBar()}
        {this.renderSearchModal()}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 20
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: APP_FONTS.FONT_MEDIUM }}>
            Create folder in{' '}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              fontFamily: APP_FONTS.FONT_MEDIUM
            }}
          >
            Documents
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 20
          }}
        >
          <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10 }}>
            <Image
              source={require('../../../assets/files-icon-deactivated.png')}
            />
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 10,
                fontFamily: APP_FONTS.FONT_MEDIUM
              }}
            >
              1 File{' '}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{
                width: 25,
                height: 25,
                justifyContent: 'flex-end',
                marginRight: 10
              }}
              source={require('../../../assets/roundPlus.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View>
            <Text style={{ fontFamily: APP_FONTS.FONT_MEDIUM }}>
              Reference Number:
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', flex: 1, marginLeft: 20 }}>
            <TextInput
              placeholder="Type or leave blank..."
              placeholderTextColor={APP_THEME.APP_LIGHT_COLOR_GREY}
              style={{
                width: '100%',
                borderBottomWidth: 1,
                paddingBottom: 10,
                fontSize: 15,
                borderBottomColor: APP_THEME.APP_LIGHT_COLOR_GREY,
                fontFamily: APP_FONTS.FONT_MEDIUM
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontFamily: APP_FONTS.FONT_MEDIUM }}>Type:</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <PickerButton
              onPress={() => {
                this.setState({
                  showModal: true,
                  currentModalType: this.modalType.TYPE
                });
              }}
              title={this.state.fileType}
              textColor={APP_THEME.APP_COLOR_DARK_BLACK}
              placeholderTextColor={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginTop: 10 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontFamily: APP_FONTS.FONT_MEDIUM }}>
              Description:
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              flex: 1,
              marginLeft: 10,
              paddingBottom: 5,
              borderBottomWidth: 1,
              borderBottomColor: APP_THEME.APP_LIGHT_COLOR_GREY
            }}
          >
            <TextInput
              placeholder="Type or leave blank..."
              placeholderTextColor={APP_THEME.APP_LIGHT_COLOR_GREY}
              style={{ width: '100%', paddingBottom: 5, fontSize: 15 }}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginTop: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontFamily: APP_FONTS.FONT_MEDIUM }}>Company:</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: 1,
              height: 20
            }}
          >
            <PickerButton
              onPress={() => {
                this.setState({
                  showModal: true,
                  currentModalType: this.modalType.COMPANY
                });
              }}
              title={this.state.company}
              textColor={APP_THEME.APP_COLOR_DARK_BLACK}
              placeholderTextColor={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginTop: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontFamily: APP_FONTS.FONT_MEDIUM }}>Matter:</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <PickerButton
              onPress={() => {
                this.setState({
                  showModal: true,
                  currentModalType: this.modalType.MATTER
                });
              }}
              title={this.state.matter}
              textColor={APP_THEME.APP_COLOR_DARK_BLACK}
              placeholderTextColor={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, marginTop: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontFamily: APP_FONTS.FONT_MEDIUM }}>
              Restricted to:
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <PickerButton
              onPress={() => {
                this.setState({
                  showModal: true,
                  currentModalType: this.modalType.RESTRICTEDTO
                });
              }}
              title={this.state.restrictedto}
              textColor={APP_THEME.APP_COLOR_DARK_BLACK}
              placeholderTextColor={APP_THEME.APP_TAB_ICON_COLOR_DESELECTED}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: 20,
            paddingRight: 10,
            flex: 1
          }}
        >
          <View style={{ width: 100 }}>
            <ColorButton title="Save" onPress={this.loginClicked} />
          </View>
        </View>
      </View>
    );
  }
}

export default CreateFolder;
