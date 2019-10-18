import React from 'react'
import PersonItem from './personItem'
import './style.css'

const PersonListColumn = ({id, name, workTime}) => {
    return (
        <>
            <div style={{'borderRadius': '0'}} className="popover-body for-names">{name}</div>
            <ul>
                {
                    workTime ?
                        workTime.map((el, index) => {
                            return <li style={{'borderRadius': '0'}}
                                       className="modal-body" key={index}>
                                <PersonItem id={id}
                                            index={index}
                                            isWork={el}
                                            name={name}/>
                            </li>
                        }) : null
                }
            </ul>
        </>
    );
};


export default PersonListColumn;