import task from './task';

module.exports = React.createClass({
  render: function() {
    var tasks = this.props.DailyList.map(function (title){
        return(
          <task title={title} />
        );
      });
    return (
      <div className="DailyTaskList">
        {tasks}
      </div>
    );
  }
});
