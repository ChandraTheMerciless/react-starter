import React from 'react'
import {UserDetails} from '../src/components/UserDetails.js';
import { assert } from 'chai'

//var Hello = require('../src/Hello.es6');

describe('UserDetails', () => {
  var userDetails;

  beforeEach(() => {
    userDetails = <UserDetails />;
  });


  it('should exist', () => {
     assert.isOk(userDetails);
  });

});
