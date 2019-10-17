import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import TimetablePage from "../TimetavblePage";

const NavigationBar = () => (
    <Router>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/musicians'>Musicians</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
        </ul>
        <Switch>
            <Route path='/' component={TimetablePage} exact/>
            <Route path='/musicians' component={Musicians}/>
            <Route path='/settings' component={Settings}/>
        </Switch>
    </Router>
);

const Musicians = () => (<h1>Musicians</h1>);
const Settings = () => (<h1>Settings</h1>);

export default NavigationBar;