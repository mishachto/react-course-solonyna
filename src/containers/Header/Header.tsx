import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActionTypes, authorActions, getAuthUser } from "@containers/";
import { ROUTER_PATH } from "../../router";
import styles from "./index.module.scss";

export default () => {
  const isAuthenticated = useSelector(getAuthUser());
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authorActions.SIGN_OUT.REQUEST());
  };
  const buttons = () => {
    if (!isAuthenticated) {
      return (
        <>
          <a href={ROUTER_PATH.LOGIN}>Login</a>
          <a href={ROUTER_PATH.REGISTRATION}>Sing Up</a>
        </>
      );
    } else {
      return (
        <>
          <a href="#" onClick={() => logout()}>
            Logout
          </a>
        </>
      );
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.box_header}>
          <div className={styles.logo}>LOGO</div>
          <div className={styles.box_button}>{buttons()}</div>
        </div>
      </div>
    </header>
  );
};

// export default Header;
