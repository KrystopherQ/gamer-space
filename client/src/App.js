import Feed from "./Components/Feed.jsx";
import Profile from "./Components/Profile.jsx";
import Friends from "./Components/Friends.jsx";
import MiniGames from "./Components/MiniGames.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/feed' element={<Feed />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/minigames' element={<MiniGames />} />
      </Routes>
    </Router>
  );
}

export default App;
