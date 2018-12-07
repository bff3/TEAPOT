import React from 'react';
import Task from './Task';

module.exports = React.createClass({
  render: function() {
    var tasks = this.props.DailyList.map(function (task){
        return(
          <Task key={task.Title} Title={task.Title} />
        );
      });
    return (
      <div className="DailyTaskList">
        {tasks}
      </div>
    );
  }
});
