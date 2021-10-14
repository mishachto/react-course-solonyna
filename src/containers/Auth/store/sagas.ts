import { takeLatest, call, put } from "redux-saga/effects";
import { authActionTypes, authorActions, IUser } from "@containers/";
import axios from "axios";
import { ROUTER_PATH } from "../../../router";

import { push } from "connected-react-router";

const userRegister: any = {
  email: "ww@ww.ww",
  password: "www",
  token: 111,
};

function* singInAuthSaga({ payload, cb }: ReturnType<typeof authorActions.SIGN_IN.REQUEST>) {
  try {
    // const { token } = yield call(() => axios.post("URL", payload))
    // jwt.verify(token, 'Secret_key', function(err, decoded) {
    //  const = {user} = decoded ;
    // });
    // yield put(authorActions.SIGN_IN.SUCCESS(data));
    if (payload.email == userRegister.email && payload.password == userRegister.password) {
      const data = {
        token: userRegister.token,
        user: {
          id: 101,
          firstName: "name-1",
          lastName: "last-name-1",
          eMail: "ww@ww.ww",
          isActive: true,
          avatar: "",
          acl: "MANAGER",
        },
      };
      localStorage.setItem("authUser", userRegister.token)
      yield put(authorActions.SIGN_IN.SUCCESS(data));
    } else {
      alert("ERROR try: email: ww@ww.ww password: www");
      yield put(authorActions.SIGN_IN.FAILURE("error"));
    }
    // } catch (err) {
    //   yield put(authorActions.SIGN_IN.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* singUpAuthSaga({ payload, cb }: ReturnType<typeof authorActions.SIGN_UP.REQUEST>) {
  try {
    // console.log(payload)
    // payload = email
    // yield call(() => axios.post("URL", payload))
    // yield put(authorActions.SIGN_UP.SUCCESS());
    // console.log(ROUTER_PATH.ACTIVATION);
    yield put(push(ROUTER_PATH.ACTIVATION));
  } catch (err) {
    yield put(authorActions.SIGN_UP.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* acountActivateAuthSaga({ payload, cb }: ReturnType<typeof authorActions.ACCOUNT_ACTIVATION.REQUEST>) {
  try {
    // payload вся инфа

    // yield call(() => axios.post("URL", payload))
    console.log(payload);

    yield put(authorActions.SIGN_IN.REQUEST({ email: payload.email, password: payload.password }));
  } catch (err) {
    yield put(authorActions.ACCOUNT_ACTIVATION.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* forgotAuthSaga({ payload, cb }: ReturnType<typeof authorActions.FORGOT_PASSWORD.REQUEST>) {
  try {
    // payload мыло
    // yield call(() => axios.post("URL", payload))
    // yield put(authorActions.FORGOT_PASSWORD.SUCCESS());
  } catch (err) {
    yield put(authorActions.FORGOT_PASSWORD.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* resetAuthSaga({ payload, cb }: ReturnType<typeof authorActions.RESET_PASSWORD.REQUEST>) {
  try {
    // payload = новый пароль и повторнное пароль  + мыло

    // yield call(() => axios.post("URL", payload))
    yield put(authorActions.RESET_PASSWORD.SUCCESS());
  } catch (err) {
    yield put(authorActions.RESET_PASSWORD.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const authWatcherSaga = function* () {
  yield takeLatest(authActionTypes.SIGN_IN.REQUEST, singInAuthSaga);
  yield takeLatest(authActionTypes.SIGN_UP.REQUEST, singUpAuthSaga);
  yield takeLatest(authActionTypes.RESET_PASSWORD.REQUEST, resetAuthSaga);
  yield takeLatest(authActionTypes.FORGOT_PASSWORD.REQUEST, forgotAuthSaga);
  yield takeLatest(authActionTypes.ACCOUNT_ACTIVATION.REQUEST, acountActivateAuthSaga);
  // yield takeLatest(authorActions.SIGN_OUT.REQUEST, singUpAuthSaga);
};
