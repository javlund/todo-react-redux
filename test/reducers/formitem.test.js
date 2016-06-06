import {expect} from 'chai';
import formitem from '../../app/reducers/formitem';

describe('formitem', function () {
  it('returns the provided value for an update', function () {
    let action = {
      type: 'UPDATE',
      value: 'test'
    };
    let state = formitem(undefined, action);
    expect(state).equal(action.value);
  });

  it('returns nothing for other action types', function () {
    let action = {
      type: 'RANDOM',
      value: 'test'
    };
    let state = formitem(undefined, action);
    expect(state).equal('');
  });
});
