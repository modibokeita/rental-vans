import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function Pricing() {
  const van = useOutletContext();
  return (
    <div className='pricing'>
        <p><strong>${van.price}</strong>/day</p>
    </div>
  )
}
