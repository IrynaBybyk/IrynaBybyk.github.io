import React from 'react';

import logo from './logo.svg';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const App = () => {


  return (
    <div className="app">
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default App;
