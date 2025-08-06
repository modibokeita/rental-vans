import React from 'react'
import logo from '../assets/images/home-hero.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="home">
        <div className="home-banner">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife 
                movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans" className="hom-link-btn">Find your van</Link>
        </div>
    </div>
  )
}
