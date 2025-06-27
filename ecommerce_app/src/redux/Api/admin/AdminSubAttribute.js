import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminSubAttibute = createApi({
  reducerPath: "AdminSubAttibute",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getSubAttribute: builder.query({
      query: () => ({
        url: "/subattribute",
        method: "GET",
      }),
    }),
    addSubAttribute: builder.mutation({
      query: (data) => ({
        url: "/subattribute",
        method: "POST",
        body: data,
      }),
    }),
    deleteSubAttribute: builder.mutation({
      query: (id) => ({
        url: `/subattribute/${id}`,
        method: "DELETE",
      }),
    }),
    updateSubAttribute: builder.mutation({
      query: (item) => ({
        url: `/subattribute/${item.id}`,
        method: "PUT",
        body: item.data,
      }),
    }),
  }),
});

export const {
  useAddSubAttributeMutation,
  useGetSubAttributeQuery,
  useDeleteSubAttributeMutation,
  useUpdateSubAttributeMutation,
} = AdminSubAttibute;
