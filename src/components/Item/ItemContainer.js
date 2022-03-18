import { connect } from 'react-redux';
import Item from './Item';
import { changeTodoState, trashTodo } from '../../state/modules/app';

function mapDispatchToProps(dispatch) {
  return {
    changeTodoState: (id) => dispatch(changeTodoState(id)),
    trashTodo: (id) => dispatch(trashTodo(id)),
  };
}

export default connect(null, mapDispatchToProps)(Item);
