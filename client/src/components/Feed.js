import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Gamer Space-logos_transparent.png';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
}