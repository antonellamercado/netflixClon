import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        className="navbar__logo"
        alt="logo"
      />
      <img
        src="https://occ-0-1701-185.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABRglbXVZiyFHuq_ClH5tCoBigFHI_3-whaHa8Jra9CICK4e3Pv28EbNXmV4K334K_Fc1PPqxGf4ol9lRHnyu1aY.png?r=6c4"
        className="navbar__avatar"
        alt="avatar"
      />
    </div>
  )
}

export default Navbar