import {ADD_WORKER, DELETE_WORKER, SET_WORK_DAY, SET_WORKERS} from "../constants";
import axios from 'axios';
import {async} from "q";

export const addWorker = (id, login, password, name, surname, workTime) => {
  return{type: ADD_WORKER, value: {id, login, password, name, surname, workTime}}
};

export const deleteWorker = (id) => {
  return {type: DELETE_WORKER, value: {id}};
};

export const setWorkDay = (id, workTime, dayIndex) => {
  return {type: SET_WORK_DAY, value: {id, dayIndex}};
};

export  const setWorkers = () => {
   return dispatch => {
     axios.get('https://barmens-19e36.firebaseio.com/workerList.json')
        .then(response => {
         dispatch({type: SET_WORKERS, value: response.data})
        })
  }
};