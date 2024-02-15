import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ChatIcon from './ChatIcon';
import Chatbox from './Chatbox';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ChatIcon} />
          <Route path="/botOpen" component={Chatbox} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;