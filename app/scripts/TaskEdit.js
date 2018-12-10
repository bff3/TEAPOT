import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

import {API_URL} from './global';

module.exports = React.createClass({
    getInitialState: function () {
        return {Type: '', Day:'', Class:'', Title: '', Description:'', Urgency: '', Complete: 'No'};
    },
    componentDidMount: function () {
        this.loadData();
    },
    componentDidUpdate: function (prevProps) {
        if (this.props.params.id != prevProps.params.id) {
            this.loadData();
        }
    },
    loadData: function () {
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            dataType: 'json',
            cache: false,
        })
            .done(function (result) {
                this.setState(result[0]);
            }.bind(this))
            .fail(function (xhr, status, errorThrown) {
                console.error(API_URL, status, errorThrown.toString());
            }.bind(this));
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
    handleComplete: function(e) {
      this.setState({Complete: 'Yes'})
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    handleUpdate: function () {
        var updatedComment = {
            Type: this.state.Type.trim(),
            Day: this.state.Day.trim(),
            Class: this.state.Class.Trim(),
            Title: this.state.Title.Trim(),
            Description: this.state.Description.Trim(),
            Urgency: this.state.Urgency.Trim(),

        };
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(updatedComment)
        })
            .done(function (comments) {
                this.context.router.push('/');
            }.bind(this))
            .fail(function (xhr, status, errorThrown) {
                console.error(API_URL, status, errorThrown.toString());
            }.bind(this));
    },
    handleDelete: function () {
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            type: 'DELETE',
        })
            .done(function (comments) {
                this.context.router.push('/');
            }.bind(this))
            .fail(function (xhr, status, errorThrown) {
                console.error(API_URL, status, errorThrown.toString());
            }.bind(this));
    },
    render: function () {
        return (
            <div>
                <form className="TaskEdit">
                    <h1>Comment Edit - {this.props.params.id}</h1>
                    <input
                        type="text"
                        value={this.state.author}
                        onChange={this.handleAuthorChange}
                    />
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                    <button type="button" onClick={this.handleUpdate}>Update
                    </button>
                    <button type="button" onClick={this.handleComplete}>Mark Completed
                    </button>
                    <button type="button" onClick={this.handleDelete}>Delete
                    </button>
                </form>
                <Link to='/'>Cancel</Link>
            </div>
        );
    }
});
