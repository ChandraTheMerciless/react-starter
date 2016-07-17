import React from 'react'
import {MainLayout} from '../src/components/MainLayout.js';
import { assert } from 'chai'

describe('MainLayout', () => {
  var mainLayout;

beforeEach(() => {
  mainLayout = <MainLayout />
});

  it('should exist', () => {
     assert.isOk(mainLayout);
  });

});
