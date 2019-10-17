import React, {Component} from 'react'
import axios from 'axios'
import PersonList from "./personList";
import DateColumn from "./dateColumn";
import pic1 from '../../pictures/7IPfK2hBvRg.jpg'
import pic2 from '../../pictures/4EqnHCsQVYA.jpg'
import pic3 from '../../pictures/257307-the-devil-is-a-part-timer-lucifer.jpg'
import  pic4 from '../../pictures/BUxZsAV8OU8.jpg'
import pic5 from '../../pictures/AlcTwgXWZPQ.jpg'

export default class TimeTable extends Component {
    state = {
      workerList: [{
          name: 'Дима',
          picture: pic1,
          workTime: [false, false, true, true, false, true, true]
      },
          {
              name: 'Максим',
              picture: pic2,
              workTime: [true, true, false, true, false, true, false]
          },
          {
              name: 'Денис',
              picture: pic3,
              workTime: [false, true, false, false, true, false, true]
          },
          {
              name: 'Саша',
              picture: pic4,
              workTime: [true, false, false, true, false, true, true]
          },
          {
              name: 'Никита',
              picture: pic5,
              workTime: [false, true, true, false, true, false, false]
          }
      ]
    };

  /*  componentDidMount() {
        axios.get("https://barmens-19e36.firebaseio.com/workerList.json")
            .then(response => this.setState({workerList: response.data}))
            .catch(error => console.log(error))
    } */

    render() {
        const {workerList} = this.state;
        return(
          <div className="d-flex">
              <DateColumn dateList={['  ','01.01 ПН','02.01 BT','03.01 CP','04.01 ЧТ', '05.01 ПТ', '06.01 СБ', '07.01 ВС']}/>
              <PersonList workers={workerList}/>
          </div>
        );
    }
};

