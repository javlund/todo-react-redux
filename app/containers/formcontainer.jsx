import React from 'react';
import {connect} from 'react-redux';
import Constants from '../constants';
import Form from '../components/form';

class FormContainer extends React.Component {
  render() {
    return (
      <Form formitem={this.props.formitem} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
    )
  }
}

FormContainer.propTypes = {
  formitem: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func    
};

const mapStateToProps = function(state) {
  return {
    formitem: state.formitem
  };
};

const mapDispatchToProps = function(dispatch) {
   return {
    onChange: (value) => {
      let action = {
        type: Constants.UPDATE,
        value: value
      };
      dispatch(action);
    },
    onSubmit: (item) => {
      let action = {
        type: Constants.ADD,
        item: item
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
