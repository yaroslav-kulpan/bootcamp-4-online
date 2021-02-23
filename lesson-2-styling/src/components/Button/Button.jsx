import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, children }) => {
  // const disabledCss = disabled ? '#888' : 'green';
  const styles = {
    backgroundColor: disabled ? '#888' : 'green',
  };

  return (
    <button style={styles} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
};

export default Button;
