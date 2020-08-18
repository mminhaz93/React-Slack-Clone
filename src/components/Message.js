import React from "react";
import "./Message.css";

const Message = ({ message, timestamp, user, userPhoto }) => {
  return (
    <div className="message">
      <img src={userPhoto} alt="" />
      <div className="messageInfo">
        <h4>
          {user}{" "}
          <span className="messageTimestamp">
            {new Date(timestamp?.toDate()).toUTCString}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
