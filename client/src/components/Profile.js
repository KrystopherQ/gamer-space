import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Gamer Space-logos_transparent.png';
import { Link } from 'react-router-dom';

function Profile() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <div class='nav'>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif'>
          <div>
            <img src={Logo} alt="Logo" style={{ width: '200px' }} />
          </div>
          <ul className='hidden md:flex'>
            <li class="btn btn-ghost normal-case text-xl" >
              <Link to='/feed'>
                Feed
              </Link>
            </li>
            <li class="btn btn-ghost bg-neutral normal-case text-xl">
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

          {/*Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/*Mobile*/}
          <div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#556b2f] flex flex-col justify-center items-center'}>
              <li className='py-6 text-4xl'>
                <Link to='/feed'>
                  Feed
                </Link></li>
              <li className='py-6 text-4xl'>
                <Link to='/profile'>
                  Profile
                </Link></li>
              <li className='py-6 text-4xl'>
                <Link to='/friends'>
                  Friends
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link to='/minigames'>
                  MiniGames
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='cards'>
        <div className='w-full h-80'>
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white font-serif grid-cols-2'>
            <h1 className='text-4xl'>Profile</h1>
            <div className='flex grid-cols-2 gap-4'>
              <div class="card w-96 bg-neutral shadow-2xl">
                <div class="card-body">
                  <h2 class="card-title">Friend Search</h2>
                  <p>Enter Friends Here</p>
                </div>
              </div>
              <div class="card w-96 bg-primary shadow-2xl">
                <div class="card-body">
                  <h2 class="card-title">Friend Post</h2>
                  <p>Enter Friend Posts Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile