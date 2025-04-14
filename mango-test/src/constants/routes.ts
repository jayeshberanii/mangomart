export const API_ROUTES = {
  SIGN_IN: "/admin/login",
  SIGN_UP: "/admin/register",
  LOGOUT: "/admin/sign-out",
  CHECK_USER_EXISTENCE: "/auth/user-exist",
  VERIFY_EMAIL: "/auth/verify-email",
  FORGOT_PASSWORD: "/auth/forgot-password",
  REFRESH_TOKEN: "/auth/refresh-token",
  INTIATE_FORGOT_PASSWORD: "/auth/forgot-password",
  USER: "/admin/user",
  USERS_COUNT: "/auth/users-count",
  UPDATE_PASSWORD: "/auth/update-password",
};

export const ROUTES = {
  HOME: "/",
  ADMIN: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  VERIFY_EMAIL: "/verify-email",
  FORGOT_PASSWORD: "/forgot-password",
  ADMIN_USERS: "/users",
  ADMIN_PRODUCTS: "/products",
  ADMIN_CATEGORIES: "/admin/categories",
  ADMIN_BRANDS: "/admin/brands",
  ADMIN_ORDERS: "/orders",
  PROFILE: "/profile",
  PRODUCT: "/product/:id",
  SUB_ROUTES: {
    USERS: "users",
    PRODUCTS: "products",
    CATEGORIES: "categories",
    BRANDS: "brands",
    ORDERS: "orders",
  },
};

export const PRODUCT_ROUTES = {
  GET_PRODUCTS: "/products",
  GET_PRODUCT_BY_ID: "/products",
  ADD_PRODUCT: "/products",
  EDIT_PRODUCT: "/products",
  DELETE_PRODUCT: "/products",
};

export const CATEGORY_ROUTES = {
  GET_CATEGORIES: "/category",
  ADD_CATEGORY: "/category",
  EDIT_CATEGORY: "/category",
  DELETE_CATEGORY: "/category",
  GET_TOTAL_CATEGORY_COUNT: "/category/count",
};

export const BRAND_ROUTES = {
  GET_BRANDS: "/brand",
  ADD_BRAND: "/brand",
  EDIT_BRAND: "/brand",
  DELETE_BRAND: "/brand",
};

export const ORDER_ROUTES = {
  GET_ORDERS: "/orders",
  GET_ORDER_BY_ID: "/orders",
  ADD_ORDER: "/orders",
  EDIT_ORDER: "/orders",
  DELETE_ORDER: "/orders",
};

export const FILTER_ROUTES = {
  CATEGORIES: "/product/categories",
};
