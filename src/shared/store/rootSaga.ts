import { UsersWatcherSaga } from "../../containers/Users/store/sagas";
import { all, fork } from "redux-saga/effects";
import { todosWatcherSaga } from "../../containers/Todos/store/sagas";
import { authWatcherSaga } from "../../containers/Auth/store/sagas";

const allSagas = [todosWatcherSaga, UsersWatcherSaga, authWatcherSaga];

export default function* rootSagas() {
  yield all(allSagas.map(fork));
}
