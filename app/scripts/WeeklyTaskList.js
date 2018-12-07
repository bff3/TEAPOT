import React from 'react';
import DailyTaskList from './DailyTaskList';

module.exports = React.createClass({
  render: function() {
    var days = this.props.WeeklyList.map(function (day){
        return(
          <DailyTaskList key={JSON.stringify(day)} DailyList={day} />
        );
      });
    return (
      <div className="WeeklyCalendar">
        {days}
      </div>
    );
  }
});
