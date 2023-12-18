import React from 'react'
import {useNavigate } from 'react-router-dom'
const Landingpg = () => {
    const navigate = useNavigate()
    return (
      <>
          <div>Landingpg</div>
          <button onClick={()=>navigate("/signin")} >SignIN</button>
      </>
  )
}

export default Landingpg