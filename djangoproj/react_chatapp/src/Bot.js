import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatIcon from './ChatIcon';
import Chatbox from './Chatbox';

const App = () => {
  return (
    <Router>
        
        <Routes>
          <Route path="/"  element={<ChatIcon />} />
          <Route path="/botOpen" element={<Chatbox />} />
        </Routes>
      
    </Router>
    
    
  );
}

export default App;