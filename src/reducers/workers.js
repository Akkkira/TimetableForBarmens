import {ADD_WORKER, DELETE_WORKER, SET_WORK_DAY, SET_WORKERS} from "../constants";

const initialState = {
    workers: []
};

const workers = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORKERS:{
            return [...action.value]
        }
        case ADD_WORKER: {
            const newState = {...state};
            newState.workers.push(action.value);
            return newState;
        }
        case DELETE_WORKER: {
            const {id} = action.value;
            const {workers} = state;
            const index = workers.findIndex(el => el.id === id);
            return {...workers.slice(0, index), ...workers.slice(index+1)};
        }
        case SET_WORK_DAY: {
            const {id, dayIndex} = action.value;
            const {workers} = state;
            const index = workers.findIndex(el => el.id === id);
            const newArray = change(workers[index].workTime, dayIndex);
            const newPerson = {...workers[index]};
            newPerson.workTime = newArray;
            return {workers: [...workers.slice(0, index), newPerson, workers.slice(index + 1)]};
        }
        default:
            return state;
    }
};

const change = (workTime, dayIndex) => {
    const temp = [...workTime];
    temp[dayIndex] = !temp[dayIndex];
    return [...temp];
};

export default workers;