import { takeLatest, call, put } from "redux-saga/effects";
import { userActionTypes, actionsUsers } from "@containers/";
import * as axios from "axios";

function* fetchUsersSaga({ cb }: ReturnType<typeof actionsUsers.FETCH_USERS.REQUEST>) {
    try {
        // const data = yield call(axios.get('/todos?order=ASC&sortBy=CreatedAt'))
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

export const UsersWatcherSaga = function* () {
    yield takeLatest(userActionTypes.FETCH_USERS.REQUEST, fetchUsersSaga);

};