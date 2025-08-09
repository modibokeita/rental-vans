import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Photos() {
  const van = useOutletContext();
  return (
    <div className='photos'>  
        <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
    </div>
  )
}

export default Photos
