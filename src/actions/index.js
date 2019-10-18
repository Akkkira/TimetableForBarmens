import {ADD_WORKER, DELETE_WORKER, SET_WORK_DAY, SET_WORKERS} from "../constants";
import axios from 'axios';

export const addWorker = (id, name, surname,  login, password, workTime = [false, false, false, false, false, false, false]) => {
  return{type: ADD_WORKER, value: {id, name, surname, login, password, workTime}}
};

export const deleteWorker = (id) => {
  return {type: DELETE_WORKER, value: {id}};
};

export const setWorkDay = (id, dayIndex) => {
  return {type: SET_WORK_DAY, value: {id, dayIndex}};
};

export  const setWorkers = () => {
   return async dispatch => {
     await axios.get('https://barmens-19e36.firebaseio.com/workerList.json')
        .then(response => {
         dispatch({type: SET_WORKERS, value: response.data})
        })
  }
};