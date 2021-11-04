import React, { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { getFilteredTodos, Todo } from "@containers/";
import styles from "./styles.module.scss";
const Todos = () => {
  const todos = useSelector(getFilteredTodos());

  const renderTodos = useMemo(() => {
    return todos?.map((todoProps) => <Todo key={todoProps.id} {...todoProps} />);
  }, [todos]);

  return <div className={styles.todos}>{renderTodos}</div>;
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
