import React from 'react'
import PropTypes from 'prop-types'
import Manager from '../components/Manager'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title : '',
      description : '',
      dueDate : new Date(),
      show : false
    }
   console.log(this.state.title)
  }

change = () => {
  this.setState({
    show:true
  })
}
  render () {
    const {title,description,dueDate} = this.state;
    return(
      <div class='main'>
        <div>
            <button type='submit' onClick={this.change} >show</button>
            {
              this.state.show && <Manager title={title} description={description} dueDate={dueDate}/>
            }
        </div>
      </div>
    )
  }
}

export default Dashboard;
