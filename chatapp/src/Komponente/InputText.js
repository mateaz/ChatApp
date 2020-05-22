import React from 'react';
import PropTypes from 'prop-types'; 

export default function InputText ({text, handleTextInput}) {
    return (
        <div>
            <input className='input'
                value={text}
                placeholder='Napiši svoju poruku ...'
                type='text'
                onChange={handleTextInput}
            />
            <button>Pošalji</button>
        </div>
    )
}

InputText.propTypes = {
    text: PropTypes.string,
    handleTextInput: PropTypes.func
}