import ForgotPassword from "./ForgotPassword";

const VerifyEmail = () => {
  return (
    <div className="container min-h-screen flex justify-center items-center">
      <ForgotPassword
        newPassword={true}
        token={window.location.search?.split("&")[1]?.split("=")[1]}
      />
    </div>
  );
};

export default VerifyEmail;
