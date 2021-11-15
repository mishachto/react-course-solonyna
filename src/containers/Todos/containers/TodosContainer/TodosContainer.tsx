import React from "react";
import { Header, Todos, Filters, Footer, AddNewTodo } from "@containers/";
import styles from "./index.module.scss";

interface IComponentProps {
  children?: React.ReactNode;
}

const TodosContainer = (props: IComponentProps) => {
  return (
    <div className={styles.todosContainer}>
      {<Header />}
      <AddNewTodo />
      {<Todos />}

      {<Filters />}
      {<Footer />}
    </div>
  );
};
export default TodosContainer;
