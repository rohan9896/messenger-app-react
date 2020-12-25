import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  console.log(input);
  console.log(messages);

  const inputHandler = (event) => {
    let userInput = event.target.value;

    setInput(userInput);
  }

  const sendMessage = (event) => {
    event.preventDefault(); //to stop browser from automatically refeshing after clicking that happens inside form

    //logic for sending the message
    setMessages([...messages, input]);

    setInput('');

  }

  return (
    <div className="App">
      <h1>Hello!!</h1>

      <form>

        {/*input field*/}
        <input value={input} onChange={inputHandler}></input>

        {/*send button*/}
        <button type='submit' onClick={sendMessage}>Send</button>

      </form>

      {/* messages */}
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
