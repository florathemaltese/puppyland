import React from 'react';
import './index.css';

function Button({ type = "button", visual = "button", onClick, children }) {
  const className = visual === "link" ? "link-button" : "standard-button";

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
