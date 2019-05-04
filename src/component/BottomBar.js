import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import TabbarButton from '../component/TabbarButton';
import Modal from 'react-native-modal';
import AddFileModal from '../screens/addFile/AddFileModal';

class BottomBar extends Component {
  state = { selectedIndex: 0, showModal: false };

  componentWillMount = () => {
    this.getPreviouslySelectedTab();
  };

  getPreviouslySelectedTab = async () => {
    const previouslySelctedIndex = await AsyncStorage.getItem(
      'SelectedTabIndex'
    );
    if (parseInt(previouslySelctedIndex)) {
      this.setState({ selectedIndex: parseInt(previouslySelctedIndex) });
    }
  };

  tabClicked = async index => {
    if (index == 0) {
      this.props.navigation.navigate('Dashboard');
      this.setState({ selectedIndex: index });
      await AsyncStorage.setItem('SelectedTabIndex', `${index}`);
    } else if (index == 1) {
      //Open modal
      this.setState({ showModal: true });
    } else {
      this.props.navigation.navigate('FolderScreen');
      this.setState({ selectedIndex: index });
      await AsyncStorage.setItem('SelectedTabIndex', `${index}`);
    }
  };

  renderModal = () => {
    return (
      <Modal
        isVisible={this.state.showModal}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        onBackdropPress={() => {
          this.setState({ showModal: false });
        }}
      >
        <AddFileModal
          navigation={this.props.navigation}
          onDismiss={() => {
            this.setState({ showModal: false });
          }}
        />
      </Modal>
    );
  };

  render() {
    return (
      <View
        style={{
          height: 49,
          flexDirection: 'row',
          borderTopColor: 'grey',
          borderTopWidth: 0.5
        }}
      >
        {this.renderModal()}
        <TabbarButton
          name="home-outline"
          tabClicked={() => {
            this.tabClicked(0);
          }}
          isSelected={this.state.selectedIndex == 0}
        />
        <TabbarButton
          name="plus"
          tabClicked={() => {
            this.tabClicked(1);
          }}
          isSelected={this.state.selectedIndex == 1}
        />
        <TabbarButton
          name="folder-outline"
          tabClicked={() => {
            this.tabClicked(2);
          }}
          isSelected={this.state.selectedIndex == 2}
        />
      </View>
    );
  }
}

export default BottomBar;
