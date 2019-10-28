import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Task from '../components/Task'
import {deleteTask} from '../actions'

const TaskList = ({tasks,onDelete}) => {
  return (
    <div>
      {
        tasks.map(task=>{
          return(
            <Task task={task} onDelete={onDelete} key={post.id}/>
          );
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
      tasks : state.tasks
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTask(id));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
