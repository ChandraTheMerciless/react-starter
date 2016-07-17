import React from 'react'
import {CreateUser} from '../src/components/CreateUser.js';
import { assert } from 'chai'

describe('CreateUser', () => {
  var createUser;

  beforeEach(() => {
    createUser = <CreateUser />
  });

  it('should exist', () => {
     assert.isOk(createUser);
  });

});
