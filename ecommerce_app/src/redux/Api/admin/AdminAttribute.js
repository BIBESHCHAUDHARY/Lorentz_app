import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminAttribute = createApi({
  reducerPath: "AdminAttribute",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getAttribute: builder.query({
      query: () => ({
        url: "/attribute",
        method: "GET",
      }),
    }),
    addAttribute: builder.mutation({
      query: (data) => ({
        url: "/attribute",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    deleteAttribute: builder.mutation({
      query: (id) => ({
        url: `/attribute/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    updateAttribute: builder.mutation({
      query: (attribute) => ({
        url: `/attribute/${attribute.id}`,
        method: "PUT",
        body: attribute.data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useAddAttributeMutation,
  useDeleteAttributeMutation,
  useGetAttributeQuery,
  useUpdateAttributeMutation,
} = AdminAttribute;
