import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Details() {
    const van = useOutletContext();

  return (
    <div className='details'>
        <h1>Name:{van.name}</h1>
        <p><strong>Description:</strong> {van.description}</p>
        <p><strong>Visibility:</strong> Public</p>
    </div>
  )
}

export default Details
