import React from 'react'

const peopleItem = ({isWork}) => {
    return(
        <div style={{color: isWork ? "green" : "red"}}>Work</div>
    );
};

export default peopleItem;