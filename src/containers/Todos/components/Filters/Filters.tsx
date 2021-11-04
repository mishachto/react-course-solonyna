import React from "react";
import styles from "./styles.module.scss";
import { todosActions, getNotCompletedTodos } from "@containers/";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector(getNotCompletedTodos());

  const applyFilters = (value: boolean | null) => {
    dispatch(todosActions.APPLY_TODOS_FILTER_SETTINGS.REQUEST({ completed: value }));
  };

  const handleRemove = () => {
    dispatch(todosActions.REMOVE_TODO.REQUEST(completedTodos.map((t) => t.id)));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.selectedItems}>
        {`${completedTodos.length} item${completedTodos.length > 1 ? "s" : ""} left`}
      </div>
      <div className={styles.filter}>
        <div onClick={() => applyFilters(null)}>All</div>
        <div onClick={() => applyFilters(false)}>Active</div>
        <div onClick={() => applyFilters(true)}>Completed</div>
      </div>
      <div onClick={handleRemove}>Clear completed</div>
    </div>
  );
};

// class Filters extends React.Component {
//   render() {
//     return <div>Filters</div>;
//   }
// }

export default Filters;
