import React from 'react';
import PropTypes from 'prop-types'; 
import './App.css';

let classname = '';

export default class MessagesList extends React.Component{
    render () {
       
    return (
        <div className='listmessage'>     
        {this.props.message.map((mess, index) => {
           
            console.log(mess)
            let currentUserId = mess.user.id;
            let userid = this.props.user.id
           
            if (currentUserId === userid) {
                classname = 'messageuser right' ;
            } else {
                classname = 'messageuser left';
            }
          // console.log(currentUserId)
           //console.log(userid)
            return (
                <div key={index} className = {classname} >
                    <em className='userid'>{mess.user.clientData.name}</em>
                    <span className='usertext' style={{background: mess.user.clientData.color}}>{mess.text}</span>
               </div> 
            )
        })}
        
    </div>
    );
}}

MessagesList.propTypes = {
    message: PropTypes.array
}