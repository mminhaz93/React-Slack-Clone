import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import db from "./firebase";
import Message from "./components/Message";
import ChatInput from "./components/ChatInput";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chatHeaderRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chatMessages">
        {roomMessages.map(({ message, timestamp, user, userPicture }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userPicture={userPicture}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id}/>
    </div>
  );
};

export default Chat;
