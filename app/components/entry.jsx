import React from 'react';
import classNames from 'classnames';

class Entry extends React.Component {
  render() {
    let classes = classNames({
      completed: this.props.completed
    });
    var checkbox
    if(!this.props.completed) {
      checkbox = <input 
          type="checkbox"
          title="Complete this item"
          onClick={this.complete.bind(this)} 
          checked={this.props.completed} />
    }
    return <li className={classes}>
      {checkbox}
      {this.props.children} 
      <button className="field" onClick={this.remove.bind(this)}>Remove</button>
    </li>;
  }

  complete(event) {
    event.preventDefault();
    this.props.complete(this.props.children);
  }

  remove(event) {
    event.preventDefault();
    this.props.remove(this.props.children);
  }
}

Entry.propTypes = {
  children: React.PropTypes.string,
  completed: React.PropTypes.bool,
  complete: React.PropTypes.func,
  remove: React.PropTypes.func
};

export default Entry;
