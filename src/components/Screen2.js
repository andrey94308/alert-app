import React, { useState } from "react";
import { useUsers } from "../UserContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id parameter from the URL
  const { updateUserStatus } = useUsers();
  const [comment, setComment] = useState("");

  const handleImOkay = () => {
    updateUserStatus(id.slice(1), "okay", "");
    navigate("/thanks");
  };

  const handleINeedHelp = () => {
    updateUserStatus(id.slice(1), "Need help", comment);
    navigate("/thanks");
  };

  return (
    <div className="h-100vh flex flex-col items-center gap-1 pd-3">
      <textarea
        value={comment}
        placeholder="What kind of help do you need?"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="flex gap-1">
        <button onClick={handleImOkay}>I'm okay</button>
        <button onClick={handleINeedHelp}>I need help</button>
      </div>
    </div>
  );
};

export default Screen2;
