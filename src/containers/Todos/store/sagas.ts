import { takeLatest, call, put } from "redux-saga/effects";
import { todosActionTypes, todosActions } from "@containers/";
import * as axios from "axios";

function* fetchTodosSaga({ _, cb }: ReturnType<any>) {
  try {
    // const data = yield call(axios.get('/todos'))
    const todos = [
      {
        id: 1,
        text: "Text 001",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 2,
        text: "Text 002",
        createAt: new Date(),
        completed: false,
      },
    ];

    yield put(todosActions.FETCH_TODOS.SUCCESS(todos));
  } catch (err) {
    yield put(todosActions.FETCH_TODOS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    // const data = yield call(axios.get(`/todos/${payload.id}`), payload)
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

function* addTodoSaga({ payload, cb }: ReturnType<any>) {
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

function* editTodoSaga({ payload, cb }: ReturnType<any>) {
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

function* removeTodoSaga({ payload, cb }: ReturnType<any>) {
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
  yield takeLatest(todosActionTypes.FETCH_TODOS.REQUEST, addTodoSaga);
  yield takeLatest(todosActionTypes.FETCH_TODOS.REQUEST, editTodoSaga);
  yield takeLatest(todosActionTypes.FETCH_TODOS.REQUEST, removeTodoSaga);
};
