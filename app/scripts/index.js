import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import weeklyCalendar from './weeklyCalendar';
import taskEdit from './taskEdit';

import '../css/base.css';




ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={weeklyCalendar}/>
            <Route path="/:id" component = {taskEdit}/>
        </Router>
    ), document.getElementById('content')
);
