import React, {Component} from 'react'
import PersonList from "./personList";
import DateColumn from "./dateColumn";
import pic1 from '../../pictures/7IPfK2hBvRg.jpg'
import pic2 from '../../pictures/4EqnHCsQVYA.jpg'
import pic3 from '../../pictures/257307-the-devil-is-a-part-timer-lucifer.jpg'
import  pic4 from '../../pictures/BUxZsAV8OU8.jpg'
import pic5 from '../../pictures/AlcTwgXWZPQ.jpg'
import dataBase from '../../database'

export default class TimeTable extends Component {
    state = {
        workerList: dataBase
    };

    render() {
        const {workerList} = this.state;
        return (
            <div className="d-flex">
                <DateColumn
                    dateList={['  ', '01.01 ПН', '02.01 BT', '03.01 CP', '04.01 ЧТ', '05.01 ПТ', '06.01 СБ', '07.01 ВС', '08.01 ПН', '09.01 ВТ', '10.01 СР', '11.01 ЧТ', '12.01 ПТ', '13.01 СБ', '14.01 ВС']}/>
                <PersonList workers={workerList}/>
            </div>
        );
    }

    AddInWorkList = () => {
        this.setState({
            workerList: this.props.data
        })
    }
};

