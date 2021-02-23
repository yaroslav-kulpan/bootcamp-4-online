import React from 'react';
// import clsx from 'classnames';

import './ButtonCss.scss';

const ButtonCss = ({ children, disabled }) => {
  const className = ['button'];

  if (disabled) {
    className.push('button-disabled');
  }

  // const className = clsx('button', {
  //   disabled: disabled,
  // });
  // if (errors) {
  //   className.push('erorrs');
  // }
  //
  // if (pending) {
  //   className.push('pending');
  // }

  return <button className={className.join(' ')}>{children}</button>;
};

export default ButtonCss;
