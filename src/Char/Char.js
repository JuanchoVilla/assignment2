// React must be imported to use jsx expressions
import React from 'react'

// we don't need the extra weight of a class so we define a function
const char = (props) => {
  // add some inline css styling
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
  };

  // return the character individually
  // add the style and when a char is clicked delete it
  return(
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  )

};

// making sure to export the function so it's available
export default char;