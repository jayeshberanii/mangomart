import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { intiateForgotPassword } from "../../services/auth.service";
import { showToast } from "../../lib/toast";
import { CommonButton } from "../global/Button";
import { useTheme } from "../../context/ThemeContext";

type LoginFormData = {
  email: string;
};

const IntiateForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useTheme();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const forgotPassword = await intiateForgotPassword(data);
      showToast(forgotPassword.message, "success");
      navigate(ROUTES.SIGN_IN);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-2">
        Initiate Forgot Password
      </h2>

      {/* Email Input */}
      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]{1,32}@[^\s@]{1,32}\.[a-zA-Z]{2,10}$/,
              message: "Invalid email format",
            },
          })}
          className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${errors.email
              ? "border-red-500 focus:ring-transparent"
              : "focus:ring-blue-500"
            }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <CommonButton className="mt-6" type="submit" disabled={isLoading}>
        {isLoading ? "Loading .." : "Confirm"}
      </CommonButton>
      <button
        className="pt-4 block text-center mx-auto cursor-pointer text-gray-600 hover:text-gray-800"
        onClick={() => navigate(ROUTES.SIGN_IN)}
      >
        Go Back
      </button>
    </form>
  );
};

export default IntiateForgotPassword;
