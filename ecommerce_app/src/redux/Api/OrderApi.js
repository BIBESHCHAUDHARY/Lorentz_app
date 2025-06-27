import { apiSlice } from "../Slice/apiSlice";

export const AuthApi = apiSlice.injectEndpoints({
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    allOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "get",
      }),
    }),
    myOrder: builder.query({
      query: () => ({
        url: "/myorder",
        method: "GET",
      }),
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),
    updateOrder: builder.mutation({
      query: (data) => ({
        url: `/order/${data.id}`,
        method: "PUT",
        body: data.order,
      }),
    }),
  }),
});

export const {
  useAllOrderQuery,
  useMyOrderQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
} = AuthApi;
