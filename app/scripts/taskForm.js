import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';

import '../css/base.css';


module.exports = React.createClass({
  getInitialState: function(){
    return {Type: '', Day:'', Class:'', Title: '', Description:'', Urgency: '', Complete: 'NotComplete'};
  },
  handleTypeChange: function(e) {
    this.setState({Type: e.target.value});
  },
  handleDayChange: function(e) {
    this.setState({Day: e.target.value})
  },
  handleClassChange: function(e) {
    this.setState({Class: e.target.value})
  },
  handleTitleChange: function(e) {
    this.setState({Title: e.target.value})
  },
  handleDescriptionChange: function(e) {
    this.setState({Description: e.target.value})
  },
  handleUrgencyChange: function(e) {
    this.setState({Ungency: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var Type = this.state.Type.trim();
    var Day = this.state.Day.trim();
    var Class = this.state.Class.trim();
    var Title = this.state.Title.trim();
    var Description = this.state.Description.trim();
    var Urgency = this.state.Urgency.trim();
    if(!Type || !Day || !Class || !Title || !Description || !Urgency){
      return;
    }
    this.props.onCommentSubmit({Type: Type, Day: Day, Class: Class, Title: Title, Description: Description, Urgency: Urgency});
    this.setState({Type: '', Day:'', Class:'', Title: '', Description:'', Urgency: '', Complete: 'NotComplete'});
  },
  render: function() {
    return (
      <form className="taskForm" onSubmit = {this.handleSubmit}>
        <select
          selected = "Type of event"
          value = {this.state.Type}
          onChange={this.handleTypeChange}>
            <option value="Due">Due Date</option>
            <option value= "Work"> Work Date</option>
        </select>

        <select
          selected = "Day"
          value = {this.state.Day}
          onChange={this.handleDayChange}>
            <option value="Sunday">Sunday</option>
            <option value= "Monday">Monday</option>
            <option value= "Tuesday">Tuesday</option>
            <option value= "Wednesday">Wednesday</option>
            <option value= "Thursday">Thursday</option>
            <option value= "Friday">Friday</option>
            <option value= "Saturday">Saturday</option>
        </select>

        <input
          type = "text"
          placeholder = "Title of Task"
          value = {this.state.Title}
          onChange={this.handleTitleChange}
        />

        <input
          type = "text"
          placeholder = "Title of Task"
          value = {this.state.Class}
          onChange={this.handleClassChange}
        />

        <input
          type = "text"
          placeholder = "Title of Task"
          value = {this.state.Title}
          onChange={this.handleTitleChange}
        />

        <select
          selected = "Urgency"
          value = {this.state.Type}
          onChange={this.handleTypeChange}>
            <option value="Urgent">Urgent</option>
            <option value= "NotUgent"> Not urgent</option>
        </select>

        <input type="submit" value="Post" />
      </form>
    );
  }
});
