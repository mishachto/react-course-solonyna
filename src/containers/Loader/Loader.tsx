import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorActions, getModal } from "..";

const Loader = () => {
  const isModal = useSelector(getModal());
  if (isModal) return <div>Check your email pls!</div>;
  return null;
};

export default Loader;
