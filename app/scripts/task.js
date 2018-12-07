import React from 'react';
//import {Link} from 'react-router';


import '../css/base.css';

module.exports = React.createClass({
  render: function() {
    return (
      <div className="task">
        <tr>
          <a href="/">{ this.props.title }</a> //replace with link to object specific page
        </tr>
      </div>
    );
  }
});
