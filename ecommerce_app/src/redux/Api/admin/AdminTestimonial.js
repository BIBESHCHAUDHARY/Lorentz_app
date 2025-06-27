import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { constant } from "../../../components/common/constant";

export const AdminTestimonial = createApi({
  reducerPath: "AdminTestimonial",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
    }),
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonial",
        method: "POST",
        body: data,
      }),
    }),
    deleteTestimonial: builder.mutation({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: "DELETE",
      }),
    }),
    updateTestimonial: builder.mutation({
      query: (category) => ({
        url: `/testimonial/${category.id}`,
        method: "PUT",
        body: category.data,
      }),
    }),
  }),
});

export const {
  useGetTestimonialQuery,
  useAddTestimonialMutation,
  useDeleteTestimonialMutation,
  useUpdateTestimonialMutation,
} = AdminTestimonial;
