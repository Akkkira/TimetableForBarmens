import React from 'react'
import {Switch, Route} from "react-router";
import TimeTable from "../timetable";

const NavigationBar = () => (
    <Switch>
        <Route path='/' component={TimeTable} exact/>
    </Switch>
);

export default NavigationBar;