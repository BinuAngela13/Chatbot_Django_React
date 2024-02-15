import React from 'react'
import './ChatIcon.css';
import {BrowserRouter, Router, useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
// import ClickableImage from './ClickableImage';

const ChatIcon = () => {

  return (
    
    <div className="bot">
        <a href="http://localhost:3000/botOpen">
        <img
          to = "/botOpen"
          className="icon" 
          src="https://cdn0.iconfinder.com/data/icons/data-science-5/140/data_science_hub_network_cluster_mining_information-512.png"
          alt="Click here to open the bot" />
        </a>
    </div>
  
  );

}

export default ChatIcon;
