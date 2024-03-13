import './css/App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import React, { useState } from 'react';
import Footer from './Footer';

const App = () => {

  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};
export default App;
