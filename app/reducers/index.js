import {combineReducers} from 'redux';
import todoList from './todolist';
import formitem from './formitem';

const reducers = combineReducers({todoList, formitem});

export default reducers;
