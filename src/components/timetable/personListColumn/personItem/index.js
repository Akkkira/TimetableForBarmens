import React,{Component} from 'react'
import Portrait from '../../../../carbon/src/components/portrait'
import './style.css'


const peopleItem = ({isWork,name,picture}) => {
    const style = isWork ? "isWork" : "isChill";
    return(
        <div className={style} onClick={() => F(isWork,name)}>
        <Portrait shape="circle" initials={name} src={picture} alt={name} darkBackground={false} />
        </div>
    );
};

const F = (isWork, name) => {
    const newisWork = !isWork
    console.log(name + " " + newisWork)
}

export default peopleItem;