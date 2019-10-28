import React from 'react';
import './App.css';
import CreateTask from './containers/CreateTask';
import TaskList from './containers/TaskList'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      
    }
  }
  render () {
    return(
      <div className="App">
        <div><CreateTask/></div>
        <div><TaskList/></div>
      </div>
    )
  }
}

export default App;
