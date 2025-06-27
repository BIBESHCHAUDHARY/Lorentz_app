import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminLogin = createApi({
  reducerPath: "AdminLogin",
  baseQuery: fetchBaseQuery({ baseUrl: constant.APIURL }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => ({
        url: "/login-admin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginAdminMutation } = AdminLogin;
