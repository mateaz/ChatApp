import React from 'react';
import PropTypes from 'prop-types'; 

export default function MessagesList ({message}) {
    return (
        <div className='listmessage'>     
        {message.map((mess) => {
            return (
                <div key={mess.id}>
                <span>{mess.username}</span>
                <span>{mess.text}</span>
               </div> 
            )
        })}
        
    </div>
    );
}

MessagesList.propTypes = {
    message: PropTypes.array
}