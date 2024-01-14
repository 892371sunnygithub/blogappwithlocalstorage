import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { LogoutHandler } = useGlobalContext();
  useEffect(() => {
    LogoutHandler();
  }, []);
  return <Navigate to="/" />;
};

export default Logout;
