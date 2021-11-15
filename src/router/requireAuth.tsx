import { getAuthUser, authorActions } from "../containers";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

//     // 1. if auth == false ? get token from localst
//     // 2. decod token = user
//     // 3. dispath = sing_in.suc
//     // 4. if auth token  not valide -> remove token is auth false

const data = {
  token: "",
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

export default (ComposedComponent: any) => {
  return (props: any) => {
    const isAuthenticated = useSelector(getAuthUser());
    const dispatch = useDispatch();
    if (!isAuthenticated) {
      const authUser = localStorage.getItem("authUser");
      if (authUser) {
        dispatch(authorActions.SIGN_IN.SUCCESS(authUser));
      }
    }
    return true ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};
