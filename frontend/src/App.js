import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BadgeForm from './components/BadgeForm';
import BadgeDisplay from './components/BadgeDisplay';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BadgeForm />} />
          <Route path="/badge/:id" element={<BadgeDisplay />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
