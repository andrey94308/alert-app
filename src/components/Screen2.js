import React, { useState } from 'react';
import { useUsers } from '../UserContext';

const Screen2 = ({ match, history }) => {
  const { updateUserStatus } = useUsers();
  const [comment, setComment] = useState('');

  const submitStatus = (status) => {
    updateUserStatus(match.params.id, status, comment);
    history.push('/thanks');
  };

  return (
    <div>
      <button onClick={() => submitStatus('Okay')}>I'm okay</button>
      <textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Your Comment"
      ></textarea>
      <button onClick={() => submitStatus('Need Help')}>I need help</button>
    </div>
  );
};

export default Screen2;
