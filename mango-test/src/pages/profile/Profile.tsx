import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../ui/button/Button";
import { useAuth } from "../../context/AuthWrapper";
import { updateUser } from "../../services/auth.service";
import { useState } from "react";
import { UserHeader } from "../../components/header/Header";

type LoginFormData = {
  email: string;
  fullName: string;
  address: string;
  phone: number;
  dob: Date | null;
};

const Profile = () => {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      fullName: (user?.fullName as string) ?? "",
      email: (user?.email as string) ?? "",
      dob: (user?.dob as unknown as Date) ?? new Date(),
      address: (user?.address as string) ?? "",
      phone: (user?.phone as number) ?? "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const response = await updateUser(data);
      setUser(response.user);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <UserHeader />
      <div className="mx-auto pt-10 px-4 md:px-0 max-w-[800px]">
        <h1 className="pb-4 text-[28px] text-gray-700">User Profile</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <div className="mt-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", {
                required: "Full Name is required",
              })}
              className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-500 focus:ring-transparent"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="mt-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              disabled
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]{1,32}@[^\s@]{1,32}\.[a-zA-Z]{2,10}$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full disabled:opacity-60 px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-transparent"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              {...register("phone", {
                required: "Phone is required",
              })}
              className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-transparent"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="datePicker"
              className="block text-sm font-medium text-gray-700 pb-1"
            >
              Date of Birth
            </label>
            <DatePicker
              selected={watch("dob")}
              onChange={(date) => setValue("dob", date)}
              dateFormat="yyyy-MM-dd"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2"
              placeholderText="Select your date of birth"
            />
          </div>
          <div className="mt-2 col-span-1 sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              rows={4}
              {...register("address")}
              className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2`}
            />
          </div>
          <div className="flex gap-4">
            <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
            <Button type="button">Cancel</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
