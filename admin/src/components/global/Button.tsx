import clsx from "clsx";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

export const FacebookButton = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="text-white cursor-pointer text-center bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
      {...props}
    >
      <svg
        className="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fillRule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clipRule="evenodd"
        />
      </svg>
      Sign in with Facebook
    </button>
  );
};

export const GoogleButton = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="text-white cursor-pointer justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      {...props}
    >
      <svg
        className="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path
          fillRule="evenodd"
          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
          clipRule="evenodd"
        />
      </svg>
      Sign in with Google
    </button>
  );
};

const variantClasses = {
  primary:
    "border-blue-600 disabled:border-blue-600/50 text-blue-600 hover:bg-blue-500 disabled:hover:bg-transparent disabled:text-blue-600/80 disabled:border-blue-500/50 hover:border-blue-400 hover:text-white",
  secondary:
    "border-1 shadow-sm w-full py-2 px-4 cursor-pointer transition-all hover:bg-white duration-300 rounded-lg hover:border-gray-400 hover:text-gray-600 border-gray-200 text-gray-700 disabled:border-gray-200/50 disabled:text-gray-400 disabled:hover:bg-transparent",
  dark: "border-gray-800 text-gray-800 hover:bg-gray-700 hover:border-gray-600 hover:text-white disabled:border-gray-800/50 disabled:text-gray-500 disabled:hover:bg-transparent",
};

export const CommonButton = ({
  variant = "primary",
  handleClick,
  children,
  className,
  ...props
}: {
  variant?: "primary" | "secondary" | "dark";
  handleClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        className,
        "inline-block text-center px-4 py-2 border w-full font-medium cursor-pointer transition-all duration-300 rounded-lg",
        variantClasses[variant]
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
