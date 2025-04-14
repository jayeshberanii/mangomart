import { useForm } from "react-hook-form";
import { registerUser } from "../../services/auth.service";
import { showToast } from "../../lib/toast";
import { useNavigate } from "react-router-dom";
// import AuthButtons from "./AuthButtons";
import { ROUTES } from "../../constants/routes";
import { useTheme } from "../../context/ThemeContext";
import { CommonButton } from "../global/Button";

type RegisterFormData = {
  fullName: string;
  email: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const { isLoading, setIsLoading } = useTheme();

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      const saveUser = await registerUser(data);
      showToast(saveUser.message, "success");
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
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

      {/* Name Input */}
      <div className="mt-6">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="fullName"
          {...register("fullName", {
            required: "Full Name is required",
          })}
          className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.fullName
              ? "border-red-500 focus:ring-transparent"
              : "focus:ring-blue-500"
          }`}
        />
        {errors?.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName?.message}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]{1,32}@[^\s@]{1,32}\.[a-zA-Z]{2,10}$/,
              message: "Invalid email format",
            },
          })}
          className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:ring-transparent"
              : "focus:ring-blue-500"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <CommonButton className="mt-6" type="submit" disabled={isLoading}>
        {isLoading ? "Loading .." : "Register"}
      </CommonButton>

      <div className="pt-3">
        Already have account ?
        <button
          type="button"
          className="text-blue-600 ps-2 cursor-pointer font-semibold"
          onClick={() => navigate(ROUTES.SIGN_IN)}
        >
          Login
        </button>
      </div>

      <hr className="my-4 text-gray-600/20" />
      {/* <AuthButtons /> */}
    </form>
  );
};

export default LoginForm;
