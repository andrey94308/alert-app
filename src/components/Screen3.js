import React from 'react';
import { useNavigate } from 'react-router-dom';

const Screen3 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Спасибо, статус отправлен</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default Screen3;
