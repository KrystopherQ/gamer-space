import Feed from "./Components/Feed";
import Friends from "./Components/Friends.jsx";
import MiniGames from "./Components/MiniGames.jsx";
import Portal from "./Components/Portal"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Portal />} />
          <Route exact path='/feed' element={<Feed />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/minigames' element={<MiniGames />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
