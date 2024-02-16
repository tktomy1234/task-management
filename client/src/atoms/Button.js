import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick = Function.prototype, label, isDisabled=false }) => {
        return (
            <button onClick={onClick} disabled={isDisabled}>
                {label}
            </button>
        );
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool
};

export default Button;
  
