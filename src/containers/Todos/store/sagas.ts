import { takeLatest, call, put } from "redux-saga/effects";
import { todosActionTypes, todosActions } from "@containers/";
import axios from "axios";
import { ITodo } from ".";

function* fetchTodosSaga({ cb }: ReturnType<typeof todosActions.FETCH_TODOS.REQUEST>) {
  try {
    const { data }: { data: ITodo[] } = yield call(() => axios.get("http://localhost:8062/api/todos"));
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
    const { data }: { data: ITodo } = yield call(() => axios.get(`http://localhost:8062/api/todos/${payload.id}`));
    yield put(todosActions.FETCH_TODO.SUCCESS(data));
  } catch (err) {
    yield put(todosActions.FETCH_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<typeof todosActions.ADD_TODO.REQUEST>) {
  try {
    const { data } = yield call(() => axios.post(`http://localhost:8062/api/todos`, payload));
    yield put(todosActions.ADD_TODO.SUCCESS(data));
  } catch (err) {
    yield put(todosActions.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<typeof todosActions.REMOVE_TODO.REQUEST>) {
  try {
    console.log("payload", payload);

    const { data } = yield call(() => axios.delete(`http://localhost:8062/api/todos/${payload}`));
    // const removeTodoId = 5;
    yield put(todosActions.REMOVE_TODO.SUCCESS(payload));
  } catch (err) {
    yield put(todosActions.REMOVE_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<typeof todosActions.EDIT_TODO.REQUEST>) {
  try {
    const { id, ...rest } = payload;
    const { data } = yield call(() => axios.put(`http://localhost:8062/api/todos/${id}`, rest));

    yield put(todosActions.EDIT_TODO.SUCCESS(data));
  } catch (err) {
    yield put(todosActions.EDIT_TODO.FAILURE(err as Object));
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
