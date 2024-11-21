// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bounties from './components/Bounties';
import Companies from './components/Companies';
import BountyProcess from './components/BountyProcess';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth'; // We'll create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <RequireAuth>
              <Home />
            // </RequireAuth>
          }
        />
        <Route
          path="/bounties"
          element={
            // <RequireAuth>
              <Bounties />
            // </RequireAuth>
          }
        />
        <Route
          path="/companies"
          element={
            // <RequireAuth>
              <Companies />
            // </RequireAuth>
          }
        />
        <Route
          path="/bounty/:id"
          element={
            // <RequireAuth>
              <BountyProcess />
            // </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
