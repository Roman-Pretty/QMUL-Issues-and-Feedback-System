import './css/App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import React, { useState } from 'react';

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
