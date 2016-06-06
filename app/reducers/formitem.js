import Constants from '../constants';

function formitem(state = '', action) {
  switch(action.type) {
    case Constants.UPDATE:
      return action.value;
    default:
      return state;
  }
}

export default formitem;
