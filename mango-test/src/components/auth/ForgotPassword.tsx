import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import { updatePassword } from "../../services/auth.service";
import { showToast } from "../../lib/toast";
import { useTheme } from "../../context/ThemeContext";
import { CommonButton } from "../global/Button";

type LoginFormData = {
  password: string;
  confirmPassword: string;
};

const ForgotPassword = ({
  newPassword,
  token,
}: {
  newPassword?: boolean;
  token: string | null;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useTheme();

  const [showPasswordFields, setShowPasswordFields] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const forgotPasswordResponse = await updatePassword({
        password: data.password,
        verificationToken: token,
      });
      showToast(forgotPasswordResponse.message, "success");
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
      <h2 className="text-2xl font-bold text-center text-gray-800 pb-4">
        {newPassword ? "Set Password" : "Reset Password"}
      </h2>

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
            type={!showPasswordFields.password ? "password" : "text"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:ring-transparent"
                : "focus:ring-blue-500"
            }`}
          />
          <button
            type="button"
            onClick={() =>
              setShowPasswordFields((prev) => ({
                ...prev,
                password: !showPasswordFields.password,
              }))
            }
            className="absolute z-30 cursor-pointer right-4 top-5/12"
          >
            {showPasswordFields.password ? (
              <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            ) : (
              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password Input */}
      <div className="mt-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={!showPasswordFields.confirmPassword ? "password" : "text"}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
              minLength: {
                value: 6,
                message: "Confirm Password must be at least 6 characters",
              },
            })}
            className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-transparent"
                : "focus:ring-blue-500"
            }`}
          />
          <button
            type="button"
            onClick={() =>
              setShowPasswordFields((prev) => ({
                ...prev,
                confirmPassword: !showPasswordFields.confirmPassword,
              }))
            }
            className="absolute z-30 cursor-pointer right-4 top-5/12"
          >
            {showPasswordFields.confirmPassword ? (
              <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            ) : (
              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword?.message}
          </p>
        )}
      </div>

      <CommonButton className="mt-6" type="submit" disabled={isLoading}>
        {isLoading ? "Loading .." : !newPassword ? "Change Password" : "Submit"}
      </CommonButton>

      <button
        className="block mx-auto cursor-pointer py-2 text-center text-gray-600 hover:text-gray-800"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Go Home
      </button>
    </form>
  );
};

export default ForgotPassword;
