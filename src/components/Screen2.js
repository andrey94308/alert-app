import React, { useState } from 'react';
import { useUsers } from '../UserContext';

const Screen2 = ({ userId }) => {
  const { updateUserStatus } = useUsers();
  const [comment, setComment] = useState('');

  const handleImOkay = () => {
    updateUserStatus(userId, 'okay', new Date().toISOString(), '');
  };

  const handleINeedHelp = () => {
    updateUserStatus(userId, 'Need help', new Date().toISOString(), comment);
  };

  return (
    <div>
      <button onClick={handleImOkay}>I'm okay</button>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={handleINeedHelp}>I need help</button>
    </div>
  );
};

export default Screen2;