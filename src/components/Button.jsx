import React from "react";
import classNames from "classnames";

export default function Button({ className, children }) {

  return (
    <button className={classNames('button', className, {})}>{children}</button>
  );
}

