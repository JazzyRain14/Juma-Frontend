import { icon } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const SubNav = ({ items, isOpen }) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = (e) => {
    e.preventDefault();
    setSubnav(!subnav)
  }

  return (
    <>
      <NavLink
        className='flex items-center justify-between mb-2 sideBarRes transition-all duration-300 ease-in-out'
        activeclassName="active"
        to={items.path}
        onClick={items.subItems && showSubnav}
      >
        <div className='flex items-center p-7 h-[60px] text-[20px] gap-2 transition-all duration-300 ease-in-out'>
          <i className='text-[25px]'>{items.icon}</i>
          <h1
            className={` lg:block ${isOpen ? 'block' : 'max-sm:hidden sm:hidden'}`}
          >{items.name}</h1>
        </div>
        <div className=' lg:mr-6 sm:mr-0 sm:-translate-x-7'>
          {items.subItems && subnav
            ? items.iconIsOpened
            : items.subItems
              ? items.iconIsClosed
              : null}
        </div>
      </NavLink>
      <div className=' bg-projectBorder'>
        {subnav && items.subItems.map((items, index) => {
        return (
          <NavLink
            className='flex items-center justify-between mb-2 sideBarRes transition-all duration-100 ease-in-out'
            activeclassName="active"
            to={items.path} key={index}>
            <div className='h-[60px] sm:p-7 max-sm:p-7 lg:pl-12 flex items-center text-lg gap-2 transition-all duration-100 ease-in-out'>
              <i className='text-[25px]'>{items.icon}</i>
              <h1
                className={` lg:block ${isOpen ? 'block' : 'max-sm:hidden sm:hidden'}`}
              >{items.name}</h1>
            </div>
          </NavLink>
        )
      })}</div>
    </>
  )
}

export default SubNav