import { combineReducers } from 'redux';
import ideasReducer from './ideas-reducer';

export const rootReducer = combineReducers({
  ideas: ideasReducer
});
