import { takeLatest, call, put, select } from "redux-saga/effects";
import { userActionTypes, actionsUsers, getUserFilterSettings } from "@containers/";
import * as axios from "axios";

function* fetchUsersSaga({ cb }: ReturnType<typeof actionsUsers.FETCH_USERS.REQUEST>) {
  try {
    // const data = yield call(axios.get('/todos?order=ASC&sortBy=CreatedAt'))
    const { search, order, sortBy } = yield select(getUserFilterSettings);
    const users = [
      {
        id: 101,
        firstName: "name-1",
        lastName: "last-name-1",
        eMail: "www@www.ss",
        isActive: true,
        avatar: "",
      },
      {
        id: 102,
        firstName: "name-2",
        lastName: "last-name-2",
        eMail: "www@www.ss",
        isActive: true,
        avatar: "",
      },
    ];

    // UI -> (action.request) -> reducer(loader: true)
    //                        -> saga(request to BE -> data) -> (action.success) -> reducer(loader: false, todos) -> UI
    yield put(actionsUsers.FETCH_USERS.SUCCESS(users));
  } catch (err) {
    yield put(actionsUsers.FETCH_USERS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchUserSaga({ payload, cb }: ReturnType<typeof actionsUsers.FETCH_USER.REQUEST>) {
  try {
    // http://localhost:300/api/todos/124234
    // const todo = yield call(axios.get(`/todos/${payload.id}`))
    const user = {
      id: 102,
      firstName: "name-2",
      lastName: "last-name-2",
      eMail: "www@www.ss",
      isActive: true,
      avatar: "",
    };
    yield put(actionsUsers.FETCH_USER.SUCCESS(user));
  } catch (err) {
    yield put(actionsUsers.FETCH_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addUserSaga({ payload, cb }: ReturnType<typeof actionsUsers.ADD_USER.REQUEST>) {
  try {
    // const data = yield call(axios.post(`/todos`, payload))
    const newUser = {
      id: 102,
      firstName: "name-2",
      lastName: "last-name-2",
      eMail: "www@www.ss",
      isActive: true,
      avatar: "",
    };
    yield put(actionsUsers.ADD_USER.SUCCESS(newUser));
  } catch (err) {
    yield put(actionsUsers.ADD_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editUserSaga({ payload, cb }: ReturnType<typeof actionsUsers.EDIT_USER.REQUEST>) {
  try {
    // const { id, ...rest } = payload
    // const data = yield call(axios.put(`/todos/${id}`, rest))
    const editedUser = {
      id: 102,
      firstName: "name-2",
      lastName: "last-name-2",
      eMail: "www@www.ss",
      isActive: true,
      avatar: "",
    };
    yield put(actionsUsers.EDIT_USER.SUCCESS(editedUser));
  } catch (err) {
    yield put(actionsUsers.EDIT_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeUserSaga({ payload, cb }: ReturnType<typeof actionsUsers.REMOVE_USER.REQUEST>) {
  try {
    // const data = yield call(axios.delete(`/todos/${payload.id}`))
    const removeUserId = 5;
    yield put(actionsUsers.REMOVE_USER.SUCCESS(removeUserId));
  } catch (err) {
    yield put(actionsUsers.REMOVE_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const UsersWatcherSaga = function* () {
  yield takeLatest(userActionTypes.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(userActionTypes.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(userActionTypes.ADD_USER.REQUEST, addUserSaga);
  yield takeLatest(userActionTypes.EDIT_USER.REQUEST, editUserSaga);
  yield takeLatest(userActionTypes.REMOVE_USER.REQUEST, removeUserSaga);
};
