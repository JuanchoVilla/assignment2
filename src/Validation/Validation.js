// we must import react to use jsx expressions
import React from 'react'

// define a function to validate text length
const validation = (props) => {
  // set the message to the default
  let validationMessage = 'Text is long enough.';

  // only change the message if it is too short
  if (props.length <=4) {
    validationMessage = 'Text is too short!'
  }

  // return the jsx expression containing the message
  return(
    <div>
      <p>{validationMessage}</p>
    </div>
  )
};

// make sure to export the function so that it's
// available to the App.js file
export default validation;