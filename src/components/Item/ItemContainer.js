import { connect } from 'react-redux';
import Item from './Item';
import { changeTodoState } from '../../state/modules/app';

function mapDispatchToProps(dispatch) {
  return {
    changeTodoState: (id) => dispatch(changeTodoState(id)),
  };
}

export default connect(null, mapDispatchToProps)(Item);
