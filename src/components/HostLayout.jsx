import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
export default function HostLayout() {
      const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  return (
    <nav className='host-layout-nav'>
        
        <NavLink 
        to="."
        end
        style={({isActive}) => isActive ? activeStyles : null}
        >Dashboard</NavLink>

        <NavLink 
        to="income"
        style={({isActive}) => isActive ? activeStyles : null}
        >Income</NavLink>
        <NavLink 
        to="vans"
        style={({isActive}) => isActive ? activeStyles : null}
        >Vans</NavLink>
        <Outlet />
    </nav>
  )
}
