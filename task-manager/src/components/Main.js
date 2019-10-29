import React from 'react'
import PropTypes from 'prop-types'
import CreateTask from '../containers/CreateTask';
import TaskList from '../containers/TaskList'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      List : true,
      Task : false,
    }
  }

  create = () => {
    this.setState({
      List: false,
      Task : true
    })
  }
  render () {
    return(
      <div>
        {this.state.List &&
          <div>
           <button type='button' onClick={this.create}>Create Task</button>
           <TaskList/>
          </div>}
        {this.state.Task && <div><CreateTask/></div>}
      </div>
    )
  }
}

export default Main;
