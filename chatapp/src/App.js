import React from 'react';
import './App.css';
import {Input} from './Komponente';
import MessagesList from './MessagesList';
import {randomColor, randomName} from './Komponente/Useri';
import 'regenerator-runtime/runtime';


const a = randomName();
const b = randomColor();

//let currentID = 0;


export default class App extends React.Component {
  state = {
    messages: [],
    user: {
      name: a,
      color: b
    }
  }

  componentDidMount (){
    this.drone = new window.Scaledrone('nPFtQQ9LLPaqNI2r', {
      data: this.state.user
    });

    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const user = {...this.state.user};
      user.id = this.drone.clientId;
      this.setState({user});
    });


    const room = this.drone.subscribe("observable-room");
    room.on('message', message => {
      const {data, member} = message;
    
      const newm = { user: member, text: data};
      const newlistm =[...this.state.messages, newm];
   
      this.setState({messages: newlistm})
  })
}

  handleNewMessage = (inputtext) => {

    /*const newm = { text: inputtext};
    const newlistm =[...this.state.messages, newm];
   
    this.setState({messages: newlistm});*/
   
    this.drone.publish({
      room: "observable-room",
      message: inputtext
    });
  }

  render () {
  return (
    <div className='App'>
      <h1 className='head'>My Chat App</h1>
         <MessagesList
             message={this.state.messages} 
             user={this.state.user.name}
             color={this.state.user.color} 
            />
        
      <Input 
        OnMessageout={this.handleNewMessage}/>
    </div>
  );
}}

