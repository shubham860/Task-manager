import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';
import { deleteTask } from '../actions';

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {
        tasks.map(task => {
          return (
            <Task task={ task } onDelete={ onDelete } key={ task.id } />
          );
      })
    }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTask(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
