import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
    'X-RapidAPI-Key': 'ba55d06a43msh5d3a67981e38c70p15b7eajsn31f396e2f695'
  };
  
  const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';
  
  const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });
  
  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
        query: (count) => createRequest(`/coindesk?limit=${count}`),
      })
    })
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;
