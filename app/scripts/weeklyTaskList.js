import dailyTaskList from './dailyTaskList';

module.exports = React.createClass({
  render: function() {
    var days = this.props.WeeklyList.map(function (day){
        return(
          <dailyTaskList dailyList={day} />
        );
      });
    return (
      <div className="weeklyTaskList">
        {days}
      </div>
    );
  }
});
