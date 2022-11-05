import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    return <p className="text-5xl">Loading. . . .</p>;
  }
  return <Navigate to="/login" state={{ from: location }} replece></Navigate>;
};

export default PrivateRoutes;
