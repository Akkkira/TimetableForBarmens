import React from 'react'
import PersonListColumn from "../personListColumn";
import './style.css'

const PersonList = ({workers}) => {
    return(
        <>
            <ul className="d-flex">
                {
                    workers.map((el, index) => {
                        return <li key={index}><PersonListColumn {...el}/></li>
                    })
                }
            </ul>
        </>
    );
};

export default PersonList;