import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/Cart";
import { AdminLogin } from "./Api/admin/AdminLogin";
import { AuthApi } from "./Api/AuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AdminCategory } from "./Api/admin/AdminCategory";
import { AdminTestimonial } from "./Api/admin/AdminTestimonial";
import { AdminUser } from "./Api/admin/AdminUser";
import { AdminBanner } from "./Api/admin/AdminBanner";
import { AdminAttribute } from "./Api/admin/AdminAttribute";
import { AdminSubAttibute } from "./Api/admin/AdminSubAttribute";
import { AdminSubCategory } from "./Api/admin/AdminSubCategory";
import { AdminProduct } from "./Api/admin/AdminProduct";
import AuthSlice from "./Slice/AuthSlice";
import { apiSlice } from "./Slice/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [AdminLogin.reducerPath]: AdminLogin.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [AdminCategory.reducerPath]: AdminCategory.reducer,
    [AdminTestimonial.reducerPath]: AdminTestimonial.reducer,
    // [AdminUser.reducerPath]: AdminUser.reducer,
    [AdminBanner.reducerPath]: AdminBanner.reducer,
    [AdminAttribute.reducerPath]: AdminAttribute.reducer,
    // [AdminBanner.reducerPath]: AdminBanner.reducer,
    [AdminSubAttibute.reducerPath]: AdminSubAttibute.reducer,
    [AdminSubCategory.reducerPath]: AdminSubCategory.reducer,
    // [AdminProduct.reducerPath]: AdminProduct.reducer,
    CART: CartSlice,
    auth: AuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      AdminLogin.middleware,
      AuthApi.middleware,
      AdminCategory.middleware,
      AdminTestimonial.middleware,
      AdminUser.middleware,
      AdminBanner.middleware,
      AdminAttribute.middleware,
      AdminSubAttibute.middleware,
      AdminSubCategory.middleware,
      AdminProduct.middleware
    ),
  devTools: true,
});
setupListeners(store.dispatch);
