import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  Input,
} from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import headerLogo from './img/messenger.svg';
// import sendIcon from './img/paper-plane.svg'

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
      <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={headerLogo} alt="logo" />
      <h1>Messenger 🙏</h1>
      <h1>Hello {userName}!!</h1>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter your msg here..👀" value={input} onChange={inputHandler} />
          <Button
            className="app__iconBtn"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
          {/* <img src={sendIcon} alt="send" className="app__iconBtn" onClick={sendMessage} type="submit"></img> */}
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
