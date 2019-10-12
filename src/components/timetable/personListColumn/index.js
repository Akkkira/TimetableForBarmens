import React from 'react'
import PersonItem from './personItem'

const PersonListColumn = ({name, workTime}) => {
    return(
        <>
        <span>{name}</span>
        <ul>
            {
                workTime.map((el, index) => {
                    return <li key={index}><PersonItem isWork={el}/></li>
                })
            }
        </ul>
      </>
    );
};

export default PersonListColumn;