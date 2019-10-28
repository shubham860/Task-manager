import { ADD_TASK, DELETE_TASK } from '../actions/types';

const taskReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TASK :
      return [...state, action.payload];
    case DELETE_TASK :
      return state.filter(task => task.id !== action.payload.id);
      default :
        return state;
  }
}

export default taskReducer;
