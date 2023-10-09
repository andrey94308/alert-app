import React, { useState } from 'react';
import { useUsers } from '../UserContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Screen2 = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id parameter from the URL
  const { updateUserStatus } = useUsers();
  const [comment, setComment] = useState('');

  const handleImOkay = () => {
    updateUserStatus(id.slice(1), 'okay', '');
    navigate('/');
  };

  const handleINeedHelp = () => {
    updateUserStatus(id.slice(1), 'Need help', comment);
    navigate('/');
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