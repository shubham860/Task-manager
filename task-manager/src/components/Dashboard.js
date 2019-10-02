import React from 'react'
import PropTypes from 'prop-types'
import Manager from '../components/Manager'

class Dashboard extends React.Component {
  render () {
    return(
      <div class='main'>
        <div>
            <Manager/>
        </div>
      </div>
    )
  }
}

export default Dashboard;
