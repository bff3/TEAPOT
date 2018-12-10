import React from 'react';
import Task from './Task';

module.exports = React.createClass({
  render: function() {
    var tasks = this.props.completedTasks.map(function (task){
        return(
          <Task id={task.id} key={task.Title} Title={task.Title} />
        );
      });
    return (
      <div className="CompletedTasks">
        <h2>Complete Tasks</h2>
        {tasks}
      </div>
    );
  }
});
