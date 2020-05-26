import React from 'react';
import './App.css';
import {Input, MessagesList} from './Komponente';
//import MessagesList from './MessagesList';
import {randomColor, randomName} from './Komponente/Useri';

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
      const useraddid = {...this.state.user};
      useraddid.id = this.drone.clientId;
      //console.log(useraddid)
      this.setState({user: useraddid});
    });


    const room = this.drone.subscribe("observable-room");
    
    room.on('message', message => {
    
      //console.log(message.member)
      //console.log(message.data)

      const newm = { user: message.member, text: message.data};
      const newlistm =[...this.state.messages, newm];
      //console.log(newlistm)
     //console.log(this.state.baba)
      this.setState({messages: newlistm})

     
  })
}

  handleNewMessage = (inputtext) => {

    /*const newm = { text: inputtext};
    const newlistm =[...this.state.messages, newm];
   
    this.setState({messages: newlistm});*/
   
    this.drone.publish({
      room: "observable-room",
      message: inputtext,
    });
  }

  render () {
  return (
    <div className='App'>
      <div className='window'>
         <MessagesList
             message={this.state.messages} 
             user={this.state.user}
             //color={this.state.user.color} 
            />
        
        <Input 
          OnMessageout={this.handleNewMessage}/>
      </div>
    </div>

  );
}}

