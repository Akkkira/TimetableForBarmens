import React from 'react'
import PersonListColumn from "../personListColumn";
import './style.css'

const PersonList = ({workers}) => {
    console.log(workers)
    return(
        <>
            <ul className="d-flex">
                {
                    workers.map((el) => {
                        return <li key={el.id}><PersonListColumn {...el}/></li>
                    })
                }
            </ul>
        </>
    );
};

export default PersonList;