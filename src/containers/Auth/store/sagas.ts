import { takeLatest, call, put } from "redux-saga/effects";
import { authActionTypes, authorActions, IUser } from "@containers/";
import axios from "axios";
import { ROUTER_PATH } from "../../../router";
import * as jwt from 'jsonwebtoken';
import { push } from "connected-react-router";

const secretKey = "asd23j34jf983jfoiqwej98d342q09gfqkw";

function* singInAuthSaga({ payload, cb }: ReturnType<typeof authorActions.SIGN_IN.REQUEST>) {
  try {
    console.log("payloadS", payload);

    const { data } = yield call(() => axios.post("http://localhost:8062/api/auth/login", payload))
    const decoded = jwt.verify(data.token, secretKey) as jwt.JwtPayload;
    const user = decoded.data;
    yield put(authorActions.SIGN_IN.SUCCESS(user));
  } catch (err) {
    yield put(authorActions.SIGN_IN.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* singUpAuthSaga({ payload, cb }: ReturnType<typeof authorActions.SIGN_UP.REQUEST>) {
  try {
    const email = {
      "email": payload
    }
    yield call(() => axios.post("http://localhost:8062/api/auth/", email))
    yield put(authorActions.SIGN_UP.SUCCESS());

    // yield put(push(ROUTER_PATH.ACTIVATION));
  } catch (err) {
    yield put(authorActions.SIGN_UP.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* acountActivateAuthSaga({ payload, cb }: ReturnType<typeof authorActions.ACCOUNT_ACTIVATION.REQUEST>) {
  try {
    // payload вся инфа
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const decoded = jwt.verify(token as string, secretKey) as jwt.JwtPayload;
    const email = decoded.email;
    
    yield call(() => axios.post(`http://localhost:8062/api/auth/account-activation/?token=${token}`, payload))
    yield put(authorActions.SIGN_IN.REQUEST({ email: email, password: payload.password }));
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

function* logoutAuthSaga({ payload, cb }: ReturnType<typeof authorActions.SIGN_OUT.REQUEST>) {
  try {
    localStorage.setItem("authUser", "");
    yield put(authorActions.SIGN_OUT.SUCCESS());
  } catch (err) {
    yield put(authorActions.SIGN_OUT.FAILURE(err as Object));
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
  yield takeLatest(authActionTypes.SIGN_OUT.REQUEST, logoutAuthSaga);
};
