import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Gamer Space-logos_transparent.png';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif '>
        <div>
          <img src={Logo} alt="Logo" style={{ width: '200px' }} />
        </div>

        {/*navbar */}
        <ul className='hidden md:flex'>
          <li class="btn btn-ghost bg-neutral normal-case text-xl" >
            <Link to='/feed'>
              Feed
            </Link>
          </li>
          <li class="btn btn-ghost normal-case text-xl">
            <Link to='/profile'>
              Profile
            </Link>
          </li>
          <li class="btn btn-ghost normal-case text-xl">
            <Link to='/friends'>
              Friends
            </Link>
          </li>
          <li class="btn btn-ghost normal-case text-xl">
            <Link to='/minigames'>
              Mini Games
            </Link>
          </li>
          <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered" />
          </div>
        </ul>
      </div>
    </div>
  )
}