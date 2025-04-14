import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthWrapper";
import { useNavigate, useLocation } from "react-router-dom";
import { Role } from "../../types/global.types";
import { ROUTES } from "../../constants/routes";
import Spinner from "./Spinner";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if ([ROUTES.SIGN_IN, ROUTES.SIGN_UP].includes(location.pathname) && user) {
      if (user?.role === Role.ADMIN) {
        navigate(ROUTES.ADMIN);
      } else {
        navigate(ROUTES.HOME);
      }
      return;
    }

    if (!user && !loading) {
      navigate(ROUTES.SIGN_IN);
    }
  }, [user, loading, navigate, location.pathname]);

  return !loading && user ? children : <Spinner />;
};

export default Protected;
