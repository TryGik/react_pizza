import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

Button.propTypes = {
  className: PropTypes.string.isRequired,
}

export default function Button({ className, children, onClick }) {

  return (
    <button onClick={onClick} className={classNames('button', className, {})}>{children}</button>
  );
}

