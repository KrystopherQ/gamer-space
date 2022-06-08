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
          <ul className='hidden md:flex'>
            <li className="btn btn-ghost normal-case text-xl" >
              <Link to='/feed'>
                Feed
              </Link>
            </li>
            <li className="btn btn-ghost normal-case text-xl">
              <Link to='/profile'>
                Profile
              </Link>
            </li>
            <li className="btn btn-ghost normal-case text-xl">
              <Link to='/friends'>
                Friends
              </Link>
            </li>
            <li className="btn btn-ghost bg-neutral normal-case text-xl">
              <Link to='/minigames'>
                Mini Games
              </Link>
            </li>
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
          </ul>

          {/*Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
          
        </div>
      </div>
    </div>
  )
}