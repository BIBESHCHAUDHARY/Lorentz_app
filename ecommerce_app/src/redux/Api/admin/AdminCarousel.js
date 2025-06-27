import { apiSlice } from "../../Slice/apiSlice";

export const AdminCarousel = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarousel: builder.query({
      query: () => ({
        url: "/carousel",
        method: "GET",
      }),
    }),
    addCarousel: builder.mutation({
      query: (data) => ({
        url: "/carousel",
        method: "POST",
        body: data,
      }),
    }),
    deleteCarousel: builder.mutation({
      query: (id) => ({
        url: `/carousel/${id}`,
        method: "DELETE",
      }),
    }),
    updateCarousel: builder.mutation({
      query: (carousel) => ({
        url: `/carousel/${carousel.id}`,
        method: "PUT",
        body: carousel.data,
      }),
    }),
  }),
});

export const {
  useGetCarouselQuery,
  useDeleteCarouselMutation,
  useUpdateCarouselMutation,
  useAddCarouselMutation,
} = AdminCarousel;
