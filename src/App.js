import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from './pages/Registration';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
