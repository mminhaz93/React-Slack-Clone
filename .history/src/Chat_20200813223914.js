import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";

const Chat = () => {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>In the {roomId} mf 🚀 </h2>
      <div className="divHeader">
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong># general</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chatHeaderRight">
          <p>
            <InfoOutlined />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
