import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY,API_URL,API_HOST} from '../../route';

const baseUrl = API_URL;

const cryptoApiHeaders = {
    'X-RapidAPI-Host': API_HOST,
    'X-RapidAPI-Key': API_KEY,
  }

// const cryptoApiParams = {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1,2',
//     orderBy: 'marketCap',
//     orderDirection: 'asc',
//     limit: '50',
// }



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