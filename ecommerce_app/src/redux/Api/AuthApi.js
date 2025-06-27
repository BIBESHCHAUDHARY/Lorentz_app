import { apiSlice } from "../Slice/apiSlice";

export const AuthApi = apiSlice.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/forget-password",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "POST",
        body: data,
      }),
    }),
    otpVerify: builder.mutation({
      query: (data) => ({
        url: "/otp-verify",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    addCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    passwordChangeWithOld: builder.mutation({
      query: (data) => ({
        url: "/changepasswordwithold",
        method: "PUT",
        body: data,
      }),
    }),

    verifyAccount: builder.mutation({
      query: (data) => ({
        url: "/verify-account",
        method: "PUT",
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: "/resend-otp",
        method: "PUT",
        body: data,
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/refresh",
        method: "POST",
        body: { refreshToken: localStorage.getItem("refreshToken") },
      }),
      //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //     try {
      //       const { data } = await queryFulfilled;
      //       dispatch(setCredentials(data));
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginUserMutation,
  useRefreshMutation,
  useUserInfoQuery,
  useAddCartMutation,
  useForgetPasswordMutation,
  useOtpVerifyMutation,
  useChangePasswordMutation,
  usePasswordChangeWithOldMutation,
  useResendOtpMutation,
  useVerifyAccountMutation,
} = AuthApi;
