import { apiSlice } from "../Slice/apiSlice";

export const AddressApi = apiSlice.injectEndpoints({
  tagTypes: ["Address"],
  endpoints: (builder) => ({
    addAddress: builder.mutation({
      query: (data) => ({
        url: "/address",
        method: "POST",
        body: data,
      }),
    }),
    getAddress: builder.query({
      query: () => ({
        url: "/address",
        method: "GET",
      }),
    }),
    updateAddress: builder.mutation({
      query: (data) => ({
        url: `/address/${data.id}`,
        method: "POST",
        body: data.address,
      }),
    }),
    deleteAddress: builder.query({
      query: (data) => ({
        url: `/address/${data}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddAddressMutation,
  useGetAddressQuery,
  useUpdateAddressMutation,
  useDeleteAddressQuery,
} = AddressApi;
