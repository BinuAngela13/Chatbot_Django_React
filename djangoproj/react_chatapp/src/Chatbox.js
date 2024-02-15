import React, {useState} from 'react'
import './Chatbox.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Chatbox extends React.Component{
// const Chatbox = () => {

    state={
       chat:[],
       msg:''
    }
    
     handleChange = (e) => {
        console.log(e.target.value);
        this.setState({msg:e.target.value
        });
    }

    
     handleSend = () => {
        console.log("clicked")
        let notAns = '';
        
        if(this.state.msg !== ''){
            fetch('http://127.0.0.1:8000/get_answer/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({ msg: this.state.msg }),
            })
            .then(res => res.json())
            .then(res => {
                let ch = this.state.chat;
                ch.push({from:'userMsg',msag:this.state.msg});
                ch.push({from:'chatbot', msag:res});
                this.setState({chat: ch, msg:''});
                console.log("state", this.state);
                console.log("res", res)

                // if (String(res).includes("Sorry")){
                //     notAns = true
                // }
                // console.log("notAns", notAns)
            })
            .catch(err => {
                console.log(err);

            });
            let interval = window.setInterval(function(){
                var elem = document.getElementById('chatting');
                if (elem != null){
                elem.scrollTop = elem.scrollHeight; }
                window.clearInterval(interval);
            }, 1000);
            this.forceUpdate();
        }
    }


    render() {
        return (
            <div className='home'> 
            <div className='messagebox' id="messagebox">
                <div className='top'>
                    <img src="https://cdn0.iconfinder.com/data/icons/data-science-5/140/data_science_hub_network_cluster_mining_information-512.png"
                         className='botIcon'></img>
                    <h2> MY CHATBOT</h2>
                    <a href="http://localhost:3000/">
                    <button className='top-close'>x</button>
                    </a>
                </div>

                <ul id='chatting' className='message_container'>
                    {
                        this.state.chat.map((msg) => {
                            if (msg.from === 'chatbot'){
                                return <li className='botMsg'> 
                                            {msg.msag}
                                        </li>
                            }
                            else{
                                return <li className='userMsg'> 
                                            {msg.msag}
                                        </li>
                            }
                        })
                    }
                </ul>

                <div className='bottom'>
                    <input 
                    onChange={(e)=> this.handleChange(e)}
                    type='text' 
                    name='msg' 
                    className='type' 
                    placeholder='Type question'
                    value={this.state.msg}>   
                
                    </input>
                    <img 
                    onClick={()=>this.handleSend()}
                    className='send' src='https://icon-library.com/images/send-icon-png/send-icon-png-13.jpg'></img>
                </div>
            </div>
            <a href="http://localhost:3001/">
                <button className='bottom-close'>x</button>
            </a>
            </div>
            
        )
    }
}

// export default Chatbox;