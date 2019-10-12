import React from 'react'
import PersonListColumn from "../personListColumn";
import DateColumn from "../dateColumn";

const PersonList = ({workers}) => {
    return(
        <>
            <ul className="list-inline">
                {
                    workers.map((el, index) => {
                        return <li className="list-inline-item" key={index}><PersonListColumn {...el}/></li>
                    })
                }
            </ul>
        </>
    );
};

export default PersonList;