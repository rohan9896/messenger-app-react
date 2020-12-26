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

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Rohan", text: "Heyy bro!" },
    { username: "Not Rohan", text: "Hello brooo!" },
  ]);
  const [userName, setUserName] = useState("");

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

    //logic for sending the message
    setMessages([...messages, { username: userName, text: input }]);

    setInput("");
  };

  return (
    <div className="App">
      <h1>_________________ Messenger</h1>
      <h1>Hello {userName}!!</h1>

      <form>
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
      {messages.map((messageObject) => (
        <Message username={userName} message={messageObject} />
      ))}
    </div>
  );
}

export default App;
