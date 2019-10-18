import React, {Component} from 'react'
import PersonList from "./personList";
import DateColumn from "./dateColumn";
import {connect} from "react-redux";

class TimeTable extends Component {
    render() {
        return (
            <div className="d-flex">
                <DateColumn
                    dateList={['  ', '01.01 ПН', '02.01 BT', '03.01 CP', '04.01 ЧТ', '05.01 ПТ', '06.01 СБ', '07.01 ВС']}/>
                <PersonList workers={this.props.state}/>
            </div>
        );
    }
};

export default connect(state => ({state: state.workers}))(TimeTable);

