import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { roomId } = useParams();
  return <div className="chat"></div>;
};

export default Chat;
