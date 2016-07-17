import React from 'react'
import {ADD_USER, CREATE_USER} from '../src/constants/actionTypes';
import Reducer from '../src/reducers/index.js';
import { assert } from 'chai'

describe('Reducers', () => {
    var initialState,
        actionAdd,
        actionCreate;

        beforeEach(() => {
          initialState = {};
          actionAdd = {
            list: {},
            type: ADD_USER
          };

          actionCreate = {
            type: CREATE_USER,
            user: {}
          }
        })

    it('should, for add user, update action in user list with object', () => {
        var reducerResult = Reducer(initialState, actionAdd);
        var emptyObj = {};
        assert.deepEqual(reducerResult, emptyObj);
    });

    it('should, for create user, update action in user list with object', () => {
        var reducerResult = Reducer(initialState, actionCreate);
        var emptyObj = {};
        assert.deepEqual(reducerResult, emptyObj);
    });

    it('should update action in user list with empty []', () => {
        var reducerResult = Reducer(initialState, "");

        //had to convert result to string to make equal assertion work
        reducerResult = reducerResult.toString(); //just converts this to empty string
        var emptyArr = [];

        assert.equal(reducerResult, emptyArr);
    });

});
