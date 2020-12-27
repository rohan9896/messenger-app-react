import React, { forwardRef } from "react";
import { Typography, CardContent, Card } from "@material-ui/core";
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message-card ${isUser && 'message_user'}`}>
      <Card className={isUser ? "message__usercard" : "message__guestcard"}>
        <CardContent>
          <Typography variant="h5" component="h2" color="white">
            {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
