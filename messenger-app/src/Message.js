import React from "react";
import { Typography, CardContent, Card } from "@material-ui/core";
import './Message.css';

function Message(props) {
  return (
    <Card className="message-card">
      <CardContent>
        <Typography variant="h5" component="h2" color="white">
          {props.username}: {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
