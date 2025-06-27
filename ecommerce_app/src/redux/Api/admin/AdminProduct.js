import { apiSlice } from "../../Slice/apiSlice";

export const AdminProduct = apiSlice.injectEndpoints({
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/product/${product.id}`,
        method: "PUT",
        body: product.data,
      }),
    }),
    myProduct: builder.query({
      query: () => ({
        url: "/myProduct",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useMyProductQuery,
} = AdminProduct;
