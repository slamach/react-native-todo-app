import { connect } from 'react-redux';
import AddForm from './AddForm';
import { addTodo } from '../../state/modules/app';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
}

export default connect(null, mapDispatchToProps)(AddForm);
