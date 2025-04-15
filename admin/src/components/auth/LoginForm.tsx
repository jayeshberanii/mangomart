import { useForm } from "react-hook-form";
import {
  getUserDetails,
  loginUser,
} from "../../services/auth.service";
import { showToast } from "../../lib/toast";
import { useNavigate } from "react-router-dom";
// import AuthButtons from "./AuthButtons";
import { useAuth } from "../../context/AuthWrapper";
import { ROUTES } from "../../constants/routes";
import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import { useTheme } from "../../context/ThemeContext";
import { CommonButton } from "../global/Button";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { isLoading, setIsLoading } = useTheme();

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const saveUser = await loginUser(data);
      showToast(saveUser?.message, "success");
      const userDetails = await getUserDetails();
      setUser(userDetails);
      navigate(ROUTES.HOME);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

      {/* Email Input */}
      <div className="mt-6">
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
          className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${errors.email
              ? "border-red-500 focus:ring-transparent"
              : "focus:ring-blue-500"
            }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${errors.password
                ? "border-red-500 focus:ring-transparent"
                : "focus:ring-blue-500"
              }`}
          />
          {!showPassword ? (
            <EyeIcon
              onClick={() => setShowPassword(!showPassword)}
              className="fill-gray-500 dark:fill-gray-400 size-5 absolute z-30 cursor-pointer right-4 top-5/12"
            />
          ) : (
            <EyeCloseIcon
              onClick={() => setShowPassword(!showPassword)}
              className="fill-gray-500 dark:fill-gray-400 size-5 absolute z-30 cursor-pointer right-4 top-5/12"
            />
          )}
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <CommonButton className="mt-6" type="submit" disabled={isLoading}>
        {isLoading ? "Loading .." : "Login"}
      </CommonButton>

      <div className="pt-2 text-start">
        <button
          type="button"
          className="text-blue-600 cursor-pointer font-semibold"
          onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
        >
          Forgot Password ?
        </button>
      </div>

      <div className="pt-2">
        Don't have an account?
        <button
          type="button"
          className="text-blue-600 ps-2 cursor-pointer font-semibold"
          onClick={() => navigate(ROUTES.SIGN_UP)}
        >
          Create an account
        </button>
      </div>

      <hr className="my-4 text-gray-600/20" />
      {/* <AuthButtons /> */}
    </form>
  );
};

export default LoginForm;
