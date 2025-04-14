/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { getUserDetails } from "../services/auth.service";

interface AuthContextProps {
  user: { [key: string]: string | number } | null;
  loading: boolean;
  setUser: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | number;
    } | null>
  >;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  setUser: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ [key: string]: string | number } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        const response = await getUserDetails();
        setUser(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/sign-in") return;
    fetchUserData();
  }, []);

  const value = useMemo(() => ({ user, setUser, loading }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
