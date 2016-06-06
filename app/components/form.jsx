import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  render() {
    return (
      <div className="entryForm">
        <form onSubmit={this.onSubmit.bind(this)}>
          New item: 
          <input 
            type="text"
            className="writeItem field"
            value={this.props.formitem} 
            onChange={this.onChange.bind(this)} 
            ref="writeItem"
            placeholder="Item title" />
          <button className="submitItem field">Add item</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.focusInputField();
  }

  focusInputField() {
    ReactDOM.findDOMNode(this.refs.writeItem).focus();
  }

  onChange(event) {
    let item = event.target.value;
    this.props.onChange(item);
  }

  onSubmit(event) {
    event.preventDefault();
    this.focusInputField();
    if(!this.props.formitem) {
      return;
    }
    this.props.onSubmit(this.props.formitem);
    this.props.onChange('');
  }
}

Form.propTypes = {
  formitem: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func    
};

export default Form;
