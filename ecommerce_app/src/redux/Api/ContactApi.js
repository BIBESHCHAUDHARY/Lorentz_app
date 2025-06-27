import { apiSlice } from "../Slice/apiSlice";

export const AuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactMutation } = AuthApi;
