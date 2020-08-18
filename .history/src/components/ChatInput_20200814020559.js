import React, { useState, useContext } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";
import { AuthContext } from "../context/AuthContext";
import db from "../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
    
  const [input, setInput] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleSend = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: "anan",
        user: "eben",
        userPicture: "got",
      });
    }
  };

  console.log(channelId)

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName?.toLowerCase()}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={handleSend}>
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
