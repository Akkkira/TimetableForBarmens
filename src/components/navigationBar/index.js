import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import TimetablePage from "../TimetavblePage";
import './style.css'

const NavigationBar = () => (
    <Router>
        <ul className="list-bar">
            <li><Link to='/'><i className="fa fa-glass fa-pulse"/> Бармены</Link></li>
            <li><Link to='/musicians'><i className="fa fa-music "/> Музыканты</Link></li>
            <li><Link to='/settings'><i className="fa fa-gear fa-spin"/> Настройки</Link></li>
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