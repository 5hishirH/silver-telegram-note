import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../CustomHooks/useAuthContext";

const PrivatePage = ({ children }) => {
  const { loading, user } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  } else if (user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
  }
};

export default PrivatePage;
