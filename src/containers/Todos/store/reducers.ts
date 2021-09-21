import { Reducer as IReducer } from "redux";
import { ITodosState, todosActionTypes } from "@containers/";

const initialstate: ITodosState = {
  error: null,
  loading: false,
  todos: [],
  todo: null,
};

export const todosReducer: IReducer<ITodosState> = (state: ITodosState = initialstate, action) => {
  switch (action.type) {
    case todosActionTypes.FETCH_TODOS.REQUEST:
    case todosActionTypes.FETCH_TODO.REQUEST:
    case todosActionTypes.ADD_TODO.REQUEST:
    case todosActionTypes.EDIT_TODO.REQUEST:
    case todosActionTypes.REMOVE_TODO.REQUEST:
      return { ...state, loading: true };

    case todosActionTypes.FETCH_TODOS.SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case todosActionTypes.FETCH_TODO.SUCCESS:
      return { ...state, loading: false, todo: action.payload };

    case todosActionTypes.ADD_TODOS.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].concat(action.payload) };

    case todosActionTypes.EDIT_TODOS.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };

    case todosActionTypes.REMOVE_TODOS.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].filter((todo) => todo.id !== action.payload) };

    case todosActionTypes.FETCH_TODOS.FAILURE:
    case todosActionTypes.FETCH_TODO.FAILURE:
    case todosActionTypes.ADD_TODO.FAILURE:
    case todosActionTypes.EDIT_TODO.FAILURE:
    case todosActionTypes.REMOVE_TODO.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
