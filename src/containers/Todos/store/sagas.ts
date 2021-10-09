import { takeLatest, call, put } from "redux-saga/effects";
import { todosActionTypes, todosActions } from "@containers/";
import axios from "axios";
import { ITodo } from ".";

function* fetchTodosSaga({ cb }: ReturnType<typeof todosActions.FETCH_TODOS.REQUEST>) {
  try {
    const { data }: { data: ITodo[] } = yield call(() => axios.get("https://jsonplaceholder.typicode.com/todos"));
    // const todos = [
    //   {
    //     id: 1,
    //     text: "Text 001",
    //     createAt: new Date(),
    //     completed: true,
    //   },
    //   {
    //     id: 2,
    //     text: "Text 002",
    //     createAt: new Date(),
    //     completed: false,
    //   },
    // ];
    // UI -> (action.request) -> reducer(loader: true)
    //                        -> saga(request to BE -> data) -> (action.success) -> reducer(loader: false, todos) -> UI
    yield put(todosActions.FETCH_TODOS.SUCCESS(data));
  } catch (err) {
    yield put(todosActions.FETCH_TODOS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchTodoSaga({ payload, cb }: ReturnType<typeof todosActions.FETCH_TODO.REQUEST>) {
  try {
    // http://localhost:300/api/todos/124234
    // const todo = yield call(axios.get(`/todos/${payload.id}`))
    const todo = {
      id: 3,
      text: "Text 003",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosActions.FETCH_TODO.SUCCESS(todo));
  } catch (err) {
    yield put(todosActions.FETCH_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<typeof todosActions.ADD_TODO.REQUEST>) {
  try {
    // const data = yield call(axios.post(`/todos`, payload))
    const newTodo = {
      id: 4,
      text: "Text 004",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosActions.ADD_TODO.SUCCESS(newTodo));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<typeof todosActions.EDIT_TODO.REQUEST>) {
  try {
    // const { id, ...rest } = payload
    // const data = yield call(axios.put(`/todos/${id}`, rest))
    const editedTodo = {
      id: 3,
      text: "Text 003",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosActions.EDIT_TODO.SUCCESS(editedTodo));
  } catch (err) {
    yield put(todosActions.EDIT_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<typeof todosActions.REMOVE_TODO.REQUEST>) {
  try {
    // const data = yield call(axios.delete(`/todos/${payload.id}`))
    const removeTodoId = 5;
    yield put(todosActions.REMOVE_TODO.SUCCESS(removeTodoId));
  } catch (err) {
    yield put(todosActions.REMOVE_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const todosWatcherSaga = function* () {
  yield takeLatest(todosActionTypes.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(todosActionTypes.FETCH_TODO.REQUEST, fetchTodoSaga);
  yield takeLatest(todosActionTypes.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(todosActionTypes.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(todosActionTypes.REMOVE_TODO.REQUEST, removeTodoSaga);
};
