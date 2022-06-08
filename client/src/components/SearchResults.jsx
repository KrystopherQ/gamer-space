import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Gamer Space-logos_transparent.png';
import { Link } from 'react-router-dom';

function SearchResult() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <div className="nav">
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif">
          <div>
            <img src={Logo} alt="Logo" style={{ width: '200px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}