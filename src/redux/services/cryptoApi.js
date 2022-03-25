import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY,API_COIN_URL,API_COIN_HOST} from '../../route';

const baseUrl = API_COIN_URL;

const cryptoApiHeaders = {
    'X-RapidAPI-Host': API_COIN_HOST,
    'X-RapidAPI-Key': API_KEY,
  }

  const createRequest = (url) => ({
  	url, headers: cryptoApiHeaders,
  });

  export const cryptoApi = createApi({
  	reducerPath: 'cryptoApi',
  	baseQuery: fetchBaseQuery({baseUrl}),
  	endpoints: (builder) => ({
  		getCryptos: builder.query({
  			query: () => createRequest('/coins')
  		})
  	})
  });

  export const {useGetCryptosQuery,} = cryptoApi;