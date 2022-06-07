import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from "./Components/Feed.jsx";
import Profile from "./Components/Profile.jsx";
import Friends from "./Components/Friends.jsx";
import MiniGames from "./Components/MiniGames.jsx";

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/feed' element={<Feed/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/friends' element={<Friends/>} />
        <Route path='/minigames' element={<MiniGames/>} />
      </Routes>
    </Router>
  );
}

export default App;
