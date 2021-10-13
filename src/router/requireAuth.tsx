import React from "react";
import { Redirect } from "react-router";

export const RequireAuthHOC = (ComposedComponent: any) => {
  return (props: any) => {
    const isAuthenticated = true;

    // 1. if auth == false ? get token from localst
    // 2. decod token = user
    // 3. dispath = sing_in.suc
    // 4. if auth token  not valide -> remove token is auth false

    return isAuthenticated ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};
