import {connect} from 'react-redux';
import {createTask} from '../actions';
import Newtask from '../components/Newtask';

const mapDispatchToProps = dispatch => {
  return{
    onAddTask : task => {
      dispatch(createTask(task));
    }
  };
};

export default connect(null,mapDispatchToProps)(Newtask);
