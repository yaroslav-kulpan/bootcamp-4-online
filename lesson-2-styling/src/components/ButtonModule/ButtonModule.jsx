import React from 'react';
import clsx from 'classnames';
import css from './ButtonModule.module.css';

const ButtonModule = ({ disabled, type = 'button', children }) => {
  const className = [css.btn];
  if (disabled) {
    className.push(css.disabled);
  }

  // clsx(css.btn, {
  //     [css.disabled]: disabled,
  // })
  //
  return (
    <button type={type} className={disabled ? css.disabled : css.primary}>
      {children}
    </button>
  );
};

export default ButtonModule;
