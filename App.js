import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import initSubscriber from 'redux-subscriber';
import { createStore } from './src/store';

import Router from './Router';

const store = createStore();
initSubscriber(store);

export default class App extends React.Component {
  componentWillMount() {
    AsyncStorage.removeItem('SelectedTabIndex');
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
