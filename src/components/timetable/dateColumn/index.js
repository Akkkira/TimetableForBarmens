import React from 'react'
import './style.css'
const DateColumn = ({dateList}) => {
    return(
        <ul className="list-group">
            {
                dateList.map((el, index) => {
                    return <li style={{'borderRadius':'0'}} className="card-body" key={index}>{el}</li>
                })
            }
        </ul>
    );
};

export default DateColumn;