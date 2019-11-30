import React, { Component } from 'react';


const Confirmation = ({ match }) => {
  return (
    <div>
      Confirmation Component
      <p>{match.params.token}</p>
    </div>
  )
}

export default Confirmation;