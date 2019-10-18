import React, {Component} from "react";
import TimeTable from "../timetable";
import Calendar from "../calendar";


export default class TimetablePage extends Component {
    state = {

    };

    render() {
        return(
            <div className="d-flex">
                <div className="for-tab list-group" ><TimeTable /></div>
                <div className="for-cal list-group"><Calendar /></div>
            </div>
        );
    }
}
