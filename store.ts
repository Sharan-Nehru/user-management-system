import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/auth';
import { profileReducer } from './reducers/profile';
import { usersReducer } from './reducers/users';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  users: usersReducer,
});

const store = createStore(rootReducer);

export default store;