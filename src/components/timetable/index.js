import React, {Component} from 'react'
import axios from 'axios'
import PersonList from "./personList";
import DateColumn from "./dateColumn";

export default class TimeTable extends Component {
    state = {
      workerList: []
    };

    componentDidMount() {
        axios.get("https://barmens-19e36.firebaseio.com/workerList.json")
            .then(response => this.setState({workerList: response.data}))
            .catch(error => console.log(error))
    }

    render() {
        const {workerList} = this.state;
        return(
          <div className="d-flex">
              <DateColumn dateList={['Days','01/01 ПН','02/01 BT','03/01 CP','04/01 ЧТ', '05/01 ПТ', '06/01 СБ', '07/01 ВС']}/>
              <PersonList workers={workerList}/>
          </div>
        );
    }
};

