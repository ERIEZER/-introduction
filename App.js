import logo from './logo.svg';
import React ,{Component, useState} from 'react';
import './App.css';
import './index.css';

import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Fotter';

function App() {


  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Footer/>
     </div>
  );
}

export default App;
