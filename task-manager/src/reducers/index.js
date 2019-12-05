import {combineReducers} from 'redux';
import taskReducers from './taskReducer';

const rootReducer  = combineReducers({
  taskReducers :taskReducers
})

export default rootReducer
