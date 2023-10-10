import React from 'react';
import { useNavigate } from 'react-router-dom';

const Screen3 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Thank you, status has been sent!</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default Screen3;
