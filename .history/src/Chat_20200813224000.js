import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";

const Chat = () => {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="divHeader">
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong># general</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chatHeaderRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
