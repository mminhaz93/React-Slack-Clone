import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { roomId } = useParams();
  return <div className="chat">
      <h2>In the {roomId} mf 🚀 </h2>
  </div>;
};

export default Chat;
