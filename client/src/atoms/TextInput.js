import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ value, onChange = Function.prototype, placeholder = "" }) => {
    const onChangeHandler = (e) =>{
        onChange(e.target.value);
    }
    
    return (
        <input type="text" value={value} onChange={onChangeHandler} placeholder={placeholder} />
    );
};

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default TextInput;

