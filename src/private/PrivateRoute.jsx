import React, { Children } from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
