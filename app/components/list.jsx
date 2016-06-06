import React from 'react';
import Entry from './entry';

class List extends React.Component {
  render () {
    var errorField;
    if(this.props.todoList.error) {
      errorField = <div className="error">{this.props.todoList.error}</div>
    }
    return (
      <div>
        <ul>
          {this.props.todoList.entries.map(entry => 
            <Entry key={entry.title} completed={entry.completed} complete={this.props.complete} remove={this.props.remove}>{entry.title}</Entry>
          )}
        </ul>
        {errorField}
      </div>
    );
  }
}

List.propTypes = {
  todoList: React.PropTypes.object,
  complete: React.PropTypes.func,
  remove: React.PropTypes.func
};

export default List;
