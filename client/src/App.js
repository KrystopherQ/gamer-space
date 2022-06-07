import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import MiniGames from "./components/MiniGames";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
