import React from 'react'

var CreateUser = React.createClass({
        render: function(){
            return(
                <button onClick={this.props.dispatchItem}>Dispatch</button>
            );
        }
});

export default CreateUser;
