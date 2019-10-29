import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Main from './Main'

class Newtask extends React.Component {
  constructor(){
    super();
    this.state = {
      name : '',
      description : '',
      startDate : new Date(),
      endDate : new Date(),
      submit : true,
      List : false
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
    this.props.onAddTask(this.state);
    this.resets();
    this.setState({
      submit : false,
      List : true
    })
  }

  resets = () => {
    this.setState({
      name : '',
      description : '',
      startDate : new Date(),
      endDate : new Date()
    });
  };
  render () {
    const {submit,List} = this.state
      return(
        <div>
          { submit &&
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
              cols="20"
              rows="4"
              type='text'
              name='description'
              placeholder='Enter task name'
              value={this.state.description}
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
              <button type='button' onClick={this.resets}>Reset</button>
            </div>

          </form>

        </div>
      }
      {
        List && <Main/>
      }
    </div>
      )
  }
}

export default Newtask;
