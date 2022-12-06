/* This component will contain: 
1. An input field which allows the user to write what they want to be on their shoping list.
2. A button which, when pressed, adds the text which they have written to their shopping list. */

import React, { useState } from "react";

import "./inputList.css";

function InputList({ addToList, buttonText }) {
  const [input, setInput] = useState(""); // Here is where the input field is tracked for list adding goodness.

  function handleInput(event) {
    // This function tracks the string information typed into the input field.
    const value = event.target.value;
    setInput(value);
  }

  function handleClick() {
    addToList(input);
    setInput("");
  }

  return (
    <section>
      <input value={input} onChange={handleInput} />
      <button className="InputList" onClick={handleClick}>
        {buttonText}
      </button>
    </section>
  );
}

export default InputList;
