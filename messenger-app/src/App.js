import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const inputHandler = (event) => {
    let userInput = event.target.value;

    setInput(userInput);
  };

  const sendMessage = (event) => {
    event.preventDefault(); //to stop browser from automatically refeshing after clicking that happens inside form

    //logic for sending the message
    setMessages([...messages, input]);

    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello!!</h1>

      <form>
        <FormControl>
          <InputLabel>Enter your msg here..👀</InputLabel>
          <Input value={input} onChange={inputHandler} />
          <FormHelperText>😈😈😈</FormHelperText>
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
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
