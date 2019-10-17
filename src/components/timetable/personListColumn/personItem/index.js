import React from 'react'
import './style.css'
import Portrait from "../../../../carbon/src/components/portrait";



//import Carbon from 'carbon-components'

const peopleItem = ({isWork,name,picture}) => {

    return(
        //<div className="for-picture">Press F</div>
        <Portrait shape="circle" initials={name} src={picture} alt={name} darkBackground={false} />
    );
};

export default peopleItem;