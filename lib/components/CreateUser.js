"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CreateUser = React.createClass({
    displayName: "CreateUser",

    render: function render() {
        return React.createElement(
            "button",
            { onClick: this.props.dispatchItem },
            "Dispatch"
        );
    }
});

exports.default = CreateUser;