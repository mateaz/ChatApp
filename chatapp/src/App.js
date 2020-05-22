import React from 'react';
import './App.css';
import {Input, MessagesList} from './Komponente';
let currentID = 0;

export default class App extends React.Component {
  state = {
    messages: [],
    member: {
      username: ['dhoasihdias', 'kajsdklasj']
      
    }
  }
  constructor() {
    super();
    this.drone = new window.Scaledrone("nPFtQQ9LLPaqNI2r", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }


  handleNewMessage = (message) => {
    currentID++;

    /*const newm = { id: currentID, text: inputtext};
    const newlistm =[...this.state.messages, newm];
    console.log(newlistm)
    this.setState({messages: newlistm});*/
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render () {
  return (
    <div className='App'>
      <div className="windowmessage">
         <MessagesList
             message={this.state.messages}  
            />
      </div>
      <Input 
        OnMessageout={this.handleNewMessage}/>
    </div>
  );
}}

