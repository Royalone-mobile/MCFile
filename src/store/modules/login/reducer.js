import { LOGIN_USER } from './types';
import { CLEAR_STATE } from '../index';

const INITIAL_STATE = { userData: {} };

export default (state = INITIAL_STATE, action) => {
  if (action.type === LOGIN_USER) {
    state = { ...state, userData: action.payload };
  }
  return state;
};
