import React from 'react';
import PropTypes from 'prop-types'; 
import '../App.css';


export default function InputText ({text, handleTextInput}) {
    return (
        <div>
            <input className='input'
                value={text}
                placeholder='Napiši svoju poruku ...'
                type='text'
                onChange={handleTextInput}
            />
            <button className='buttoninput'>Pošalji</button>
        </div>
    )
}

InputText.propTypes = {
    text: PropTypes.string,
    handleTextInput: PropTypes.func
}