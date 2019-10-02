import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dashboard from '../components/Dashboard'

class Manager extends React.Component {
  constructor(){
    super()
    this.state = {
      title : '',
      description : '',
      dueDate : new Date(),
    }
  }

  handleChange = date => {
    this.setState({
      dueDate: date
    });
  };

  submit = () => {
    const {title,description,dueDate} = this.state;
    return(
      <Dashboard title={title} description={description} dueDate={dueDate}/>
    )
  }

  titlehandler = event => {
    this.setState({
      title : event.target.value,
    })
  }

  deshandler = event => {
    this.setState({
      description : event.target.value,
    })
  }

  render () {
    const {title,description,dueDate} = this.state;
      return(
        <div class='Manager'>
          <input type='text' value={title} onChange={this.titlehandler}/>
          <input type='text' value={description} onChange={this.deshandler}/>
          <DatePicker selected={dueDate} onSelect={this.handleSelect} onChange={this.handleChange}/>
          <button type='submit' onClick={this.submit}>Submit</button>
        </div>
      )
  }
}

export default Manager;
