import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Uncontrolled form => Controlled form */}
      <input type="text" value={input} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};

export default Form;
