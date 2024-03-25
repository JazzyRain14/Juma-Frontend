import React from 'react'
import { useNavigate } from 'react-router-dom'

import Section1 from '../components/Landingpg/Section1'
import Section3 from '../components/Landingpg/Section3'
import Section4 from '../components/Landingpg/Section4'
import Section2 from '../components/Landingpg/Section2'
import Section5 from '../components/Landingpg/Section5'
import PFooter from '../components/Landingpg/Footer'
import NavBar from '../components/NavBar'
const Landingpg = () => {
  return (
    <div
      className='bg-black'
    >
      <NavBar />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />/
      <PFooter />
    </div>
  )
}

export default Landingpg