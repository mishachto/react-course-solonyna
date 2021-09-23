import React, { useState, useEffect } from "react";
// import { Todo } from "@containers/";
interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      text: "Test 001",
      createAt: new Date(),
      completed: false,
    },
  ]);

  useEffect(() => {
    setTodos((state) =>
      state.concat([
        {
          id: 2,
          text: "Test 002",
          createAt: new Date(),
          completed: false,
        },
        {
          id: 3,
          text: "Test 003",
          createAt: new Date(),
          completed: false,
        },
      ]),
    );
  }, []);

  return (
    <>
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};
export default Todos;
