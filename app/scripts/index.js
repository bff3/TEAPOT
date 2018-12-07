import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';

//import weeklyCalendar from './weeklyCalendar';
import weeklyTaskList from './weeklyTaskList';
import taskEdit from './taskEdit';

import '../css/base.css';


ReactDOM.render(<WeeklyCalendar WeeklyList={[["one","two","three"],["ein","swei","drei"],["un","deux","treis"]]} />, document.getElementById('root'));
/*
ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={weeklyCalendar}/>
            <Route path="/:id" component = {taskEdit}/>
        </Router>
    ), document.getElementById('content')
);
*/
