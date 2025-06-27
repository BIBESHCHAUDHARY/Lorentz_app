import { apiSlice } from "../Slice/apiSlice";

export const AuthApi = apiSlice.injectEndpoints({
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    increaseCart: builder.mutation({
      query: (data) => ({
        url: "/cart-increase",
        method: "POST",
        body: data,
      }),
    }),
    decreaseCart: builder.mutation({
      query: (data) => ({
        url: "/cart-decrease",
        method: "POST",
        body: data,
      }),
    }),
    removeCart: builder.mutation({
      query: (data) => ({
        url: "/removecart",
        method: "POST",
        body: data,
      }),
    }),
    emptyCart: builder.mutation({
      query: () => ({
        url: "/cart-empty",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useAddCartMutation,
  useIncreaseCartMutation,
  useDecreaseCartMutation,
  useRemoveCartMutation,
  useEmptyCartMutation,
} = AuthApi;
