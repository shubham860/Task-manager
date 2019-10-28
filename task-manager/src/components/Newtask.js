import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Newtask extends React.Component {
  constructor(){
    super();
    this.state = {
      name : '',
      description : '',
      startDate : new Date(),
      endDate : new Date()
    }
  }

  input_handler = event => {
  this.setState({
    [event.target.name] : event.target.value
  })
  }

  startChange = date => {
    this.setState({
      startDate: date
    });
  };

  endChange = date => {
    this.setState({
      endDate: date
    });
  };

  submit = event => {
    event.preventDefault();
    console.log(this.state)
  }
  render () {
      return(
        <div class='main'>
          <h1>New post</h1>

          <form onSubmit={this.submit}>
            <div className='ip1'>
              <input
              type='text'
              name='name'
              placeholder='Enter task name'
              value={this.state.name}
              onChange={this.input_handler}
              className='ip'/>
            </div>

            <div className='ip1'>
              <textarea
              type='text'
              name='descripton'
              placeholder='Enter task name'
              value={this.state.descripton}
              onChange={this.input_handler}
              className='ip'>
              </textarea>
            </div>

            <div class='ip1'>
              <DatePicker
              selected={this.state.startDate}
              onChange={this.startChange}
              />

              <DatePicker
              selected={this.state.endDate}
              onChange={this.endChange}
              />
            </div>

            <div className='btns'>
              <button type='submit'>Add task</button>
              <button type='button' onClick={this.reset}>Reset</button>
            </div>

          </form>

        </div>
      )
  }
}

export default Newtask;
