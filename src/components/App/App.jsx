import React from 'react';
import axios from 'axios';
import ReviewFeedback from './Components/ReviewFeedback';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <ReviewFeedback />
    </div>
  );
}

export default App;
