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
          <>
            <DateColumn dateList={[1, 2, 3, 4]}/>
            <PersonList workers={workerList}/>
          </>
        );
    }
};

