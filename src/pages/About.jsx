import React from 'react'
import { Link } from 'react-router-dom'
import aboutHero from "../assets/images/about-hero.png"


export default function About() {
  return (
    <div className='about-page'>
      <img src={aboutHero} alt="About Hero" className='about-hero' />
      <div className='about-content'>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect 
          travel van rental. Our vans are recertified before each trip 
          to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
          <br />
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</p>
        <div className='about-banner'>
          <h2>Your destination is waiting.</h2>
          <p>Your van is ready.</p>
          <Link to="/vans" className="about-link-btn">Explore our vans</Link>
        </div>
      </div>

    </div>
  )
}
