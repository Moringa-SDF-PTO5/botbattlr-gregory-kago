
import React from 'react';

const DeleteButton = ({ onClick }) => {
  return (
    <button style={{ color: 'red' }} onClick={onClick}>
      x
    </button>
  );
};

export default DeleteButton;
