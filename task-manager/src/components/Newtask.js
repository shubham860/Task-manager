import React from 'react'
import PropTypes from 'prop-types'

class Newtask extends React.Component {
  render () {
      return(
        <div class='main'>
          <h1>New post</h1>

          <form>
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
              cols="9"
              rows="4"
              type='text'
              name='descripton'
              placeholder='Enter task name'
              value={this.state.descripton}
              onChange={this.input_handler}
              className='ip'>
              </textarea>
            </div>

          </form>

        </div>
      )
  }
}

export default Newtask;
