import React from 'react'
import * as actions from '../src/actions/index';
import { assert } from 'chai'

describe('Actions', () => {

  var addUserData,
      createUserData;

  beforeEach(() => {
    addUserData = { type: 'ADD_USER', list: 'list' };
    createUserData = { type: 'CREATE_USER', user: 'user' };
  });

  it('should return the addUser type', () => {
      var add = actions.addUser('list');

      assert.deepEqual(add, addUserData)
  });

  it('should return the createUser type', () => {
      var create = actions.createUser('user');

      assert.deepEqual(create, createUserData)
  });
});
