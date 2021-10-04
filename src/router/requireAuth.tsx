import React from "react";
import { Redirect } from "react-router";

export const RequireAuthHOC = (ComposedComponent: any) => {
  return (props: any) => {
    const isAuthenticated = true;
    return isAuthenticated ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};
