import React from 'react';
import PropTypes from 'prop-types'; 
import './App.css';

export default class MessagesList extends React.Component{
    render () {
       
    return (
        <div className='listmessage'>     
        {this.props.message.map((mess, index) => {
            console.log('lll')
            console.log(this.props.message)
            return (
                <div key={index} className='messageuser' >
                    <em className='userid'>{this.props.user}</em>
                    <span className='usertext' style={{background: this.props.color}}>{mess.text}</span>
               </div> 
            )
        })}
        
    </div>
    );
}}

MessagesList.propTypes = {
    message: PropTypes.array
}