import React from 'react';
import { useHistory } from 'react-router-dom';

const Screen3 = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Спасибо, статус отправлен</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default Screen3;
