import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodos, getTodo } from "@containers/";
//@ts-ignore

const Todos = () => {
  const todos = useSelector(getTodos());
  const todo = useSelector(getTodo());
  return (
    <>
      {todos?.map(({ title, id, completed }) => (
        <div key={id}>
          <input type="checkbox" defaultChecked={completed} />
          {title}
        </div>
      ))}
      <button></button>
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
