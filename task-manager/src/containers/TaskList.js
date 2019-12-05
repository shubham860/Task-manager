import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';
import { deleteTask } from '../actions';

class TaskList extends React.Component{
  constructor(props){
    super(props)
  }
render(){
  console.log(this.props)
  return (
    <div>
      {this.props.tasks.map(task => {
          return (
            <Task task={ task } onDelete={ this.props.onDelete } key={ task.id } />
          );
      })}
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducers
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
