import { Link } from "react-router";
import GridShape from "../../components/global/GridShape";
import { ROUTES } from "../../constants/routes";

export default function NotFoundPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
      <GridShape />
      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
          ERROR
        </h1>

        <img src="/images/error/404.svg" alt="404" className="dark:hidden" />
        <img
          src="/images/error/404-dark.svg"
          alt="404"
          className="hidden dark:block"
        />

        <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          We can’t seem to find the page you are looking for!
        </p>

        <Link
          to={ROUTES.ADMIN}
          className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white hover:bg-gray-100 px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
