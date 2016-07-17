import React from 'react'
import TestUtils from 'react-addons-test-utils'
require('./testdom')('<html><body></body></html>');
import {Home} from '../src/components/Home.js';
import { assert } from 'chai'



describe('Home', () => {
    var component = <Home />;

    it('should exist', () => {
        assert.isOk(component);
    });

    // it("should contain home text", () => {
    //    var p = document.getElementsByTagName("p");
    //
    //    console.log(component);
    //    assert.equal(component.getDOMNode().innerHTML, "Welcome to the Home Page", "home component contains text");
    // });

});
