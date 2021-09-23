import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "@containers/";
interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

const Todos = () => {
  const todos = useSelector(getTodos());

  return (
    <>
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};

// interface ITodosState {
//   todos: ITodo[];
// }

// interface ITodosProps {}

// class Todos extends React.Component<ITodosProps, ITodosState> {
//   constructor(props: ITodosProps) {
//     super(props);
//     this.state = {
//       todos: [
//         {
//           id: 1,
//           text: "Test 001",
//           createAt: new Date(),
//           completed: false,
//         },
//       ],
//     };
//   }

//   componentDidMount() {
//     this.setState((state) => ({
//       todos: [...state.todos].concat([
//         {
//           id: 2,
//           text: "Test 002",
//           createAt: new Date(),
//           completed: false,
//         },
//         {
//           id: 3,
//           text: "Test 003",
//           createAt: new Date(),
//           completed: false,
//         },
//       ]),
//     }));
//   }

//   render() {
//     const {
//       state: { todos },
//     } = this;
//     return (
//       <>
//         {todos?.map(({ text, id }) => (
//           <div key={id}>{text}</div>
//         ))}
//       </>
//     );
//   }
// }

export default Todos;
