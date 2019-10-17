import React from 'react'
import PersonItem from './personItem'
import './style.css'

const PersonListColumn = ({name, workTime, picture}) => {
    return(
        <>
            <div style={{'borderRadius':'0'}} className="popover-body for-names">{name}</div>
            <ul>
                {
                    workTime.map((el, index) => {
                        return <li style={{'borderRadius':'0'}}  className="modal-body" key={index}><PersonItem name={name} picture={picture} isWork={el}/></li>
                    })
                }
            </ul>
        </>
    );
};

export default PersonListColumn;