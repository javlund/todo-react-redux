import Constants from '../constants';

const initialState = {
  entries: [],
  error: null
};

function todoList(state = initialState, action) {
  switch(action.type) {
    case Constants.ADD: {
      let title = action.item;
      let item = {
        title: title,
        completed: false
      };
      if(state.entries.some(entry => entry.title === title)) {
        return {
          entries: state.entries,
          error: `The entry ${title} already exists.`
        };
      }
      return {
        entries: [
          ...state.entries,
          item
        ],
        error: null
      };
    }
    case Constants.COMPLETE: {
      return {
        entries: state.entries.map(item => {
          return {
            title: item.title,
            completed: item.title === action.key || item.completed
          };
        }),
        error: null
      };
    }
    case Constants.REMOVE: {
      return {
        entries: state.entries.filter(item => item.title !== action.key),
        error: null
      };
    }
    default: {
      return state;
    }
  }
}

export default todoList;
