import {expect} from 'chai';
import todoList from '../../app/reducers/todolist';

describe('todolist', function () {
  it('has an initial state if zero entries and no error', function () {
    let expectedState = {
      entries: [],
      error: null
    };
    let action = {
      type: 'NONE'
    };
    let state = todoList(undefined, action);
    expect(state).deep.equal(expectedState);
  });

  describe('adding an entry', function () {
    it('adds an entry if it does not exist', function () {
      let action = {
        type: 'ADD',
        item: 'test title'
      };
      let expectedState = {
        entries: [{
          title: 'test title',
          completed: false
        }],
        error: null
      };
      let state = todoList(undefined, action);
      expect(state).deep.equal(expectedState);
    });

    it('will have an error state if adding an existing entry', function () {
      let action = {
        type: 'ADD',
        item: 'existing'
      };
      let expectedState = {
        entries: [{
          title: 'existing',
          completed: true
        }],
        error: 'The entry existing already exists.'
      };
      let initialState = {
        entries: [{
          title: 'existing',
          completed: true
        }]
      };
      let state = todoList(initialState, action);
      expect(state).deep.equal(expectedState);
    });
  });

  describe('completing an entry', function () {
    it('sets an entry to completed', function () {
      let action = {
        type: 'COMPLETE',
        key: 'completable'
      };
      let expectedState = {
        entries: [{
          title: 'completable',
          completed: true
        }, {
          title: 'already completed',
          completed: true
        }],
        error: null
      };
      let initialState = {
        entries: [{
          title: 'completable',
          completed: false
        }, {
          title: 'already completed',
          completed: true
        }]
      };
      let state = todoList(initialState, action);
      expect(state).deep.equal(expectedState);
    });
  });

  describe('removing an entry', function () {
    it('removes an entry from the list of entries', function () {
      let action = {
        type: 'REMOVE',
        key: 'removable'
      };
      let expectedState = {
        entries: [],
        error: null
      };
      let initialState = {
        entries: [{
          title: 'removable',
          completed: false
        }]
      };
      let state = todoList(initialState, action);
      expect(state).deep.equal(expectedState);
    });
  });
});
