import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your base API configuration
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    // You can add headers, credentials, etc. here if needed
  }),
  endpoints: (builder) => ({
    // Define your endpoints here, for example:
    // getHadith: builder.query({
    //   query: (id) => `hadith/${id}`,
    // }),
    // getDuas: builder.query({
    //   query: (category) => `dua/${category}`,
    // }),
  }),
});

// Export hooks for usage in components
// export const { useGetHadithQuery, useGetDuasQuery } = api;
