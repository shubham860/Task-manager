import React from 'react';
import './App.css';
import CreateTask from './containers/CreateTask';
import TaskList from './containers/TaskList'


class App extends React.Component {
  render () {
    return(
      <div className="App">
        <CreateTask/>
        <TaskList/>
      </div>
    )
  }
}

export default App;
