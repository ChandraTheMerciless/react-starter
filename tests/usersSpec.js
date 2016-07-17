import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {Users} from '../src/components/Users.js';
import { assert } from 'chai'

describe("Users", () => {
  var users, UserComp, props, user;

  beforeEach(() => {
    users = <Users />;
    user = {name:"dummy dummy", email:'dummy@icct.com', foo:'aa'}

    // UserComp = TestUtils.renderIntoDocument(Users);
    props = {}
  });

  it('should exist', () => {
    assert.isOk(users);
  });

  // it('should update constructor with props', () => {
  //   Users.constructor(props);
  //   //assert something
  // });

  it('should render the user page', () => {
    // let userComp = user.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");


    // console.log(userComp);

    // Users.render();
    //
    // assert.isOk(Users.render)
  });

})
