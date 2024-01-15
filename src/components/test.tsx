import React from "react";
import "../App.css";
type TestProps = {
  name: string;
  age: number;
};
const Test = ({ name, age }: TestProps) => {
  return (
    <div>
      <span className="name">Name: {name}</span>,
      <span className="age">Age: {age}</span>
    </div>
  );
};

export default Test;
