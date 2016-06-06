import React from 'react';
import {connect} from 'react-redux';
import List from '../components/list';
import Constants from '../constants';

class ListContainer extends React.Component {
  render() {
    return (
      <List todoList={this.props.todoList} complete={this.props.complete} remove={this.props.remove} />
    );
  }
}

ListContainer.propTypes = {
  todoList: React.PropTypes.object,
  complete: React.PropTypes.func,
  remove: React.PropTypes.func
};

const mapStateToProps = function(state) {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    complete: (key) => {
      let action = {
        type: Constants.COMPLETE,
        key: key
      };
      dispatch(action);
    },
    remove: (key) => {
      let action = {
        type: Constants.REMOVE,
        key: key
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
