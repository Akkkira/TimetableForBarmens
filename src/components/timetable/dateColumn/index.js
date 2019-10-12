import React from 'react'

const DateColumn = ({dateList}) => {
    return(
      <ul>
          {
              dateList.map((el, index) => {
                  return <li key={index}>{el}</li>
              })
          }
      </ul>
    );
};

export default DateColumn;