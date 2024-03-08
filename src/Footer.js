import React from 'react'
import './css/footpanel.css'
const Footer = () => {

  const toTopScroll = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div class="foot-panel1"
      onClick={toTopScroll}
    >Back to Top
    </div>
  )
}

export default Footer