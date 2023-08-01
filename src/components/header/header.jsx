import React from 'react'
import {VscAdd}from 'react-icons/vsc'
import {BsFillCalendarCheckFill}from 'react-icons/bs'
import '../../styles/headerStyle.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
    <div className="namePage">
        Fixit List
    </div>
    <div className="btnTask">
        <button className="btnAdd"><Link to='/form'><VscAdd/> New task</Link></button>
        <button className="btnEndedTask"><Link to='/history'><BsFillCalendarCheckFill/> Completed</Link></button>
    </div>
    </div>
  )
}

export default Header