import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../components/common/constant";

const baseQuery = fetchBaseQuery({
  baseUrl: constant.APIURL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   console.log("result", result);
//   if (
//     result?.error?.status === 403 ||
//     result?.error?.data?.message === "jwt expired"
//   ) {
//     const refreshToken = localStorage.getItem("refreshToken");
//     console.log("refreshToken", refreshToken);
//     if (refreshToken) {
//       const refreshResult = await baseQuery(
//         {
//           url: "/refresh",
//           method: "POST",
//           body: { refreshToken },
//         },
//         api,
//         extraOptions
//       );
//       if (refreshResult?.data) {
//         api.dispatch(
//           setCredentials({
//             accessToken: refreshResult.data.accessToken,
//             refreshToken: refreshResult.data.refreshToken,
//           })
//         );
//         result = await baseQuery(args, api, extraOptions);
//       } else {
//         if (
//           refreshResult?.error?.status === 403 &&
//           refreshResult?.error?.data?.message === "Refresh token expired."
//         ) {
//           api.dispatch(logout());
//           return {
//             error: { message: "Session expired. Please log in again." },
//           };
//         }
//         return { error: { message: "Failed to refresh token." } };
//       }
//     } else {
//       return {s
//         error: { message: "No refresh token available. Please log in again." },
//       };
//     }
//   }

//   return result;
// };

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["User", "Cart", "Address", "Order", "Product"],
  endpoints: (builder) => ({}),
});
