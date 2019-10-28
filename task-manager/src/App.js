import React from 'react';
import './App.css';
import createTask from './containers/createTask';
import Newtask from './components/Newtask'

function App() {
  return (
    <div className="App">
      <Newtask/>
    </div>
  );
}

export default App;
