import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../Slice/apiSlice";

export const AdminUser = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/allusers",
        method: "GET",
      }),
      providesTags: (result, error, arg) => {
        if (!result?.data) return [];
        return result.data.map(({ id }) => ({ type: "User", id }));
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const { useAllUsersQuery, useDeleteUserMutation } = AdminUser;
