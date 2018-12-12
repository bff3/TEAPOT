import React from 'react';
import {Link} from 'react-router';


import '../css/base.css';



module.exports = React.createClass({
  render: function() {
    return (

      <div className="Task">
          <Link to={'/' + this.props.id}>{this.props.Title}</Link>
      </div>

    );
  }
});
