import React, { useState } from "react";
import ReactDOM from "react-dom";

const Input = () => {
  return <input placeholder="Your input here" />;
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList}
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("form"));




