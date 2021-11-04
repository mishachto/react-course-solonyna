import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { todosActions, ITodo, AddNewTodo } from "@containers/";

const Todo = (props: ITodo) => {
  const { id, title, completed } = props;
  const [isEditMode, setModeStatus] = useState<boolean>(false);
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(todosActions.REMOVE_TODO.REQUEST(id));
  };

  const handleChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(todosActions.EDIT_TODO.REQUEST({ ...props, completed: checked }));
  };

  const doubleClickHandler = () => setModeStatus((state) => !state);

  return (
    <div className={styles.todo} key={id}>
      {isEditMode ? (
        <AddNewTodo onClose={() => setModeStatus(false)} {...props} />
      ) : (
        <>
          <input onChange={handleChange} type="checkbox" id={id?.toString()} checked={completed} />
          <label htmlFor={id?.toString()} onDoubleClick={doubleClickHandler}>
            {title}
          </label>
          <button onClick={removeTodo}>Remove</button>
        </>
      )}
    </div>
  );
};
export default Todo;
