import { useSearchParams } from "react-router-dom";
import ForgotPassword from "../../components/auth/ForgotPassword";
import IntiateForgotPassword from "../../components/auth/IntiateForgotPassword";

function ForgotPasswordPage() {
  const params = useSearchParams();
  return (
    <div className="container min-h-screen flex justify-center items-center">
      {params[0].get("token") ? (
        <ForgotPassword token={params[0].get("token")} />
      ) : (
        <IntiateForgotPassword />
      )}
    </div>
  );
}

export default ForgotPasswordPage;
