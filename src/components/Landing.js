import React from 'react'
import '../styles/pages/landing.css';
import logoImg from '../images/logo1.svg';
import {FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div id="page-landing">
      <div className="content-wrapper">
          <img src={logoImg} alt="Happy" />
     

      <main>
        <h1>Bring happines to your world</h1>
        <p>Search for animal shelters and find your best friend</p>
      </main>

      <div className="location">
        <strong>Atlanta</strong>
        <span>Georgia</span>
      </div>

      <Link to="" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
      </div>
    </div>
    )
}
