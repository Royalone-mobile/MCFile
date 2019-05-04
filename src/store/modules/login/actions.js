import { AsyncStorage } from 'react-native';
import { LOGIN_USER } from './types';
import { CLEAR_STATE } from '../index';

export const saveLoggedInUserInformation = data => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: data
  });
};
