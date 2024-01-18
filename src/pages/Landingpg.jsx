import React from 'react'
import { useNavigate } from 'react-router-dom'

import Section1 from '../components/Landingpg/Section1'
import Section2 from '../components/Landingpg/Section2'
import Section3 from '../components/Landingpg/Section3'
const Landingpg = () => {
  const navigate = useNavigate()
  return (
    <div
      className=' 
      bg-[#050609] 
      border border-red-500'
    >
      <Section3 />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Landingpg