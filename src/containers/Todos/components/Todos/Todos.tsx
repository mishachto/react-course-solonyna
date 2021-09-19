import React, { useState } from "react";
interface ITodo {
  id: number;
  state: boolean;
  text: string;
  createDate?: Date;
}

const Todos = () => {
  const [todos] = useState<ITodo[]>([
    {
      id: 1,
      text: "Test 001",
      createDate: new Date(),
      state: false,
    },
    {
      id: 2,
      text: "Test 002",
      state: true,
    },
  ]);


  return (
    <>
      {todos?.map(({ text, id, state, createDate }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};
export default Todos