import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/auth/SignInPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import AdminLayout from "../layout/AdminLayout";
// import Protected from "../components/global/Protected";
import { ROUTES } from "../constants/routes";
import { lazy, Suspense } from "react";
import Spinner from "../components/global/Spinner";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyEmail from "../components/auth/VerifyEmail";
import SignUpPage from "../pages/auth/SignUpPage";
// import Categories from "../pages/admin/categories/Categories";
import Orders from "../pages/admin/brands/Orders";

const Routing = () => {
  const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
  const Profile = lazy(() => import("../pages/profile/Profile"));
  const Users = lazy(() => import("../pages/admin/users/Users"));
  const Products = lazy(() => import("../pages/admin/products/Products"));

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* SignIn Route */}
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />

          {/* SignUp Route */}
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />

          {/* SignUp Route */}
          <Route path={ROUTES.VERIFY_EMAIL} element={<VerifyEmail />} />

          {/* Forgot Password Route */}
          <Route
            path={ROUTES.FORGOT_PASSWORD}
            element={<ForgotPasswordPage />}
          />

          {/* Admin Layout with Nested Routes */}
          <Route
            path={ROUTES.ADMIN}
            element={
              // <Protected>
                <AdminLayout />
              // </Protected>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path={ROUTES.SUB_ROUTES.PRODUCTS} element={<Products />} />
            {/* <Route path={ROUTES.SUB_ROUTES.CATEGORIES} element={<Categories />} /> */}
            <Route path={ROUTES.SUB_ROUTES.ORDERS} element={<Orders />} />
            <Route path={ROUTES.SUB_ROUTES.USERS} element={<Users />} />
          </Route>

          {/* Profile Route */}
          <Route path={ROUTES.PROFILE} element={<Profile />} />

          {/* Catch-all Route for undefined paths (404 Page) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
