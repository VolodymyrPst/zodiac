import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CatFact {
  fact: string;
  length: number;
}

export const catFactApi = createApi({
  reducerPath: "catFactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja" }),
  endpoints: (builder) => ({
    getCatFact: builder.query<CatFact, void>({
      query: () => "/fact",
    }),
  }),
});

export const { useGetCatFactQuery } = catFactApi;
