import { connect } from 'react-redux';
import App from './App';

function mapStateToProps(state) {
  return {
    todos: state.app.todos,
  };
}

export default connect(mapStateToProps, null)(App);
