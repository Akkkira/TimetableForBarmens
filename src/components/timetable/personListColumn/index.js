import React from 'react'
import PersonItem from './personItem'

const PersonListColumn = ({name, workTime}) => {
    return(
        <>
        <span>{name}</span>
        <ul className="list-group">
            {
                workTime.map((el, index) => {
                    return <li className="list-group-item" key={index}><PersonItem isWork={el}/></li>
                })
            }
        </ul>
      </>
    );
};

export default PersonListColumn;