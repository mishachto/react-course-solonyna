import React, { useEffect } from "react";
import { TodosContainer, todosActions } from "@containers/";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosActions.FETCH_TODOS.REQUEST());
  }, [dispatch]);
  return <TodosContainer />;
};

export default App;
