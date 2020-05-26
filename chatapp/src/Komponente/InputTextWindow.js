import React from 'react';
import InputText from './InputText';
import PropTypes from 'prop-types'; 
import '../App.css';



export default class InputTextWindow extends React.Component {
    state = {
        textmessage: ''
    }

    handleSumbitMessage = (event) => {
        event.preventDefault();

        if (this.state.textmessage.length > 0) {
            this.props.OnMessageout(this.state.textmessage)
            this.setState({textmessage: ''})
        }}

    handleInputText = (event) => {
        const newtext = event.target.value;
        this.setState({textmessage: newtext})
    }

    render () {
        return (
                <form className='inputtextwindow' onSubmit={this.handleSumbitMessage}>
                    <InputText 
                        text={this.state.textmessage}
                        handleTextInput={this.handleInputText}
                    />
                </form>
        )
    }
}

InputTextWindow.propTypes = {
    OnMessageout: PropTypes.func
}