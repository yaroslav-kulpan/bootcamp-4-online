import React from 'react';

const Button = ({className, disabled, children}) => {
    return (
        <button type="button" className={className} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;