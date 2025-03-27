import { useState } from "react";

const SerchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value) onSubmit(value);
  };
  const hendleChange = (ev) => {
    setInputValue(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={inputValue}
        onChange={hendleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SerchForm;
