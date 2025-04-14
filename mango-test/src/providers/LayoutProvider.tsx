import { ReactNode } from "react";
import AuthProvider from "../context/AuthWrapper";

type Props = {
  children: ReactNode;
};

const LayoutProvider = ({ children }: Props) => {
  return (
    <AuthProvider>
          <main>{children}</main>
    </AuthProvider>
  );
};

export default LayoutProvider;
