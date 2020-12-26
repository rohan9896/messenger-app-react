import React from "react";
import { Typography, CardContent, Card } from "@material-ui/core";
import './Message.css';

function Message({message, username}) {
  const isUser = username === message.username;
  return (
    <div className={`message-card ${isUser && 'message_user'}`}>
      <Card className={isUser ? "message__usercard" : "message__guestcard"}>
        <CardContent>
          <Typography variant="h5" component="h2" color="white">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
