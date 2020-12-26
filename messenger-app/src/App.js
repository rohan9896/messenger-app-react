import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import icon from './img/messenger.svg'

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data()})));
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Enter your name: "));
  }, []);

  // console.log(input);
  // console.log(messages);
  // console.log(userName);

  const inputHandler = (event) => {
    let userInput = event.target.value;

    setInput(userInput);
  };

  const sendMessage = (event) => {
    event.preventDefault(); //to stop browser from automatically refeshing after clicking that happens inside form

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={icon} alt="logo" />
      <h1>मौनावलंबी गप दूत 🙏</h1>
      <h1>Hello {userName}!!</h1>

      <form className="app__form">
        <FormControl>
          <InputLabel>Enter your msg here..👀</InputLabel>
          <Input value={input} onChange={inputHandler} />
          <FormHelperText>Messages are end-to-end encrypted👻</FormHelperText>
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      {/* messages */}
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
