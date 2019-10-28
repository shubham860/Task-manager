import uuidv4 from 'uuid/v4';
import { ADD_TASK, DELETE_TASK } from './types';

export const createTask = ({name,description,startDate,endDate}) => {
  return {
  type : ADD_TASK,
  payload : {
    id = uuidv4(),
    name,
    description,
    startDate,
    endDate
  }
    }
};

export const deleteTask = id => {
  return {
    type : DELETE_TASK,
    payload : {
      id
    }
  }
}
