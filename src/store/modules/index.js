import { auth } from './login';

/**
 * Root reducers.
 */

export const CLEAR_STATE = 'clear_state';

export const reducers = {
  auth: auth.reducer
};

/**
 * Root actions.
 */
export const actions = {
  auth: auth.actions
};
export { auth };
