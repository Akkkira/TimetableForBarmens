import React from 'react'

const DateColumn = ({dateList}) => {
    return(
          <ul className="list-group">
              {
                  dateList.map((el, index) => {
                      return <li className="list-group-item" key={index}>{el}</li>
                  })
              }
          </ul>
    );
};

export default DateColumn;