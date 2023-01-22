import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ReviewFeedback from './Components/ReviewFeedback';
import './App.css';
import FeelingsForm from './Components/FeelingsForm';
import UnderstandingForm from './Components/UnderstandingForm';
import SupportForm from './Components/SupportForm';
import CommentsForm from './Components/CommentsForm';
import HomePage from './Components/HomePage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/FeelingsForm">
          <FeelingsForm />
        </Route>

        <Route exact path="/UnderstandingForm">
          <UnderstandingForm />
        </Route>

        <Route exact path="/SupportForm">
          <SupportForm />
        </Route>

        <Route exact path="/CommentsForm">
          <CommentsForm />
        </Route>

        <Route exact path="/ReviewFeedback">
          <ReviewFeedback />
        </Route>

      </Router>
    </div>
  );
}

export default App;
