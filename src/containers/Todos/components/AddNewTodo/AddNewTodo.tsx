import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { todosActions, ITodo } from "@containers/";
import { useDispatch } from "react-redux";

interface IAddNewTodo extends Partial<ITodo> {
  onClose?: () => void;
}

const AddNewTodo = (props: IAddNewTodo) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (props?.id) {
      setValue(props.title as string);
    }
  }, [props?.id]);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setValue(value);

  const handleKeyPress = ({ which, key }: any) => {
    if (which === 13 && key === "Enter") {
      if (props?.id) {
        dispatch(
          todosActions.EDIT_TODO.REQUEST(
            {
              ...props,
              title: value,
            },
            props?.onClose,
          ),
        );
      } else {
        dispatch(
          todosActions.ADD_TODO.REQUEST({
            // id: new Date().getTime(),
            title: value,
            // userId: 1,
            completed: false,
          }),
        );
      }

      setValue("");
    }
  };

  return (
    <div className={styles.addNewTodo}>
      <input
        value={value}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        placeholder="What needs to be done?"
        type="text"
      />
    </div>
  );
};

export default AddNewTodo;
