import { BASE_URL } from "../../constants/constant";
import { FacebookButton, GoogleButton } from "../global/Button";

const AuthButtons = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}/auth/google`;
  };

  const handleFacebookLogin = () => {
    window.location.href = `${BASE_URL}/auth/facebook`;
  };

  return (
    <div className="flex flex-col gap-2">
      <FacebookButton type="button" onClick={handleFacebookLogin} />
      <GoogleButton type="button" onClick={handleGoogleLogin} />
    </div>
  );
};

export default AuthButtons;
