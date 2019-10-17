import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import TimetablePage from "../TimetavblePage";

const NavigationBar = () => (
    <Router>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='musicians'>Musicians</Link></li>
            <li><Link to='settings'>Settings</Link></li>
        </ul>
        <Switch>
            <Route path='/' component={TimetablePage} exact/>
            <Route path='/musicians' component={<h1>Musicians</h1>}/>
            <Route path='/settings' component={<h1>Settings</h1>}/>
        </Switch>
    </Router>
);

export default NavigationBar;