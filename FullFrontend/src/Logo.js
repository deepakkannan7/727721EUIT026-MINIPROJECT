import React from 'react'
import './Logo.css';
import img from './assets/WhatsApp Image 2023-07-14 at 4.11.02 PM.jpeg'
import { Link } from 'react-router-dom';
const Logo = () => {
  return (

    <div className='Logcol'>

        <Link to='./Choose'>
    <div className='Logotot'>
        <img src={img} className='Logoimg'></img>   
    </div>
    </Link>
    </div>
  )
}

export default Logo