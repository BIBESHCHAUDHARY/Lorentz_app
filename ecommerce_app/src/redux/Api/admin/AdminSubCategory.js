import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminSubCategory = createApi({
  reducerPath: "AdminSubCategory",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getSubCategory: builder.query({
      query: () => ({
        url: "/subcategory",
        method: "GET",
      }),
    }),
    addSubCategory: builder.mutation({
      query: (data) => ({
        url: "/subcategory",
        method: "POST",
        body: data,
      }),
    }),
    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: "DELETE",
      }),
    }),
    updateSubCategory: builder.mutation({
      query: (subcategory) => ({
        url: `/subcategory/${subcategory.id}`,
        method: "PUT",
        body: subcategory.data,
      }),
    }),
    subCategorySearch: builder.query({
      query: (category) => ({
        url: `/subcategory?category=${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetSubCategoryQuery,
  useDeleteSubCategoryMutation,
  useUpdateSubCategoryMutation,
  useAddSubCategoryMutation,
  useSubCategorySearchQuery,
} = AdminSubCategory;
