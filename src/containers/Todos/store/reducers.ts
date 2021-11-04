import { Reducer as IReducer } from "redux";
import { ITodosState, todosActionTypes } from "@containers/";
import { ACTION_FAILURE_REQUEST } from "@shared/";
import { ITodo } from "./interfaces";

const initialstate: ITodosState = {
  error: null,
  loading: false,
  todos: [],
  todo: null,
  filterSettings: {
    completed: null,
  },
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

    case todosActionTypes.ADD_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].concat(action.payload) };

    case todosActionTypes.EDIT_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };

    case todosActionTypes.REMOVE_TODO.SUCCESS:
      let newTodosList: ITodo[] = [];

      if (Array.isArray(action.payload)) {
        newTodosList = [...state.todos].filter((todo) => action.payload.includes(todo.id));
      } else {
        newTodosList = [...state.todos].filter((todo) => todo.id !== action.payload);
      }

      return { ...state, loading: false, todos: newTodosList };

    case todosActionTypes.ADD_TODO.FAILURE:
      return { ...state, loading: false, error: action.payload.message };

    case todosActionTypes.APPLY_TODOS_FILTER_SETTINGS.REQUEST:
      return { ...state, filterSettings: { ...state.filterSettings, ...action.payload } };
    default:
      return state;
  }
};
