import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class CustomButton extends Component {
  buttonClicked = () => {
    console.log('forgot password');
  };

  render() {
    return (
      <View style={styles.rightAlign}>
        <View
          style={[
            styles.rightAlign,
            styles.redBackground,
            { width: this.props.buttonWidth }
          ]}
        >
          <Button
            onPress={this.buttonClicked}
            title={this.props.buttonTitle}
            color="white"
            backgroundColor="red"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rightAlign: {
    alignItems: 'flex-end'
  },
  redBackground: {
    backgroundColor: '#BE2727',
    alignItems: 'center',
    borderRadius: 10,
    fontWeight: 'bold'
  }
});

export default CustomButton;
