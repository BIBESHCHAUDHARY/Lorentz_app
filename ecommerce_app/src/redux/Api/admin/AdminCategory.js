import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminCategory = createApi({
  reducerPath: "AdminCategory",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/category/${category.id}`,
        method: "PUT",
        body: category.data,
      }),
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = AdminCategory;
