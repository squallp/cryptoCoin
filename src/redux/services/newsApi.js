import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY,API_NEWS_URL,API_NEWS_HOST} from '../../route';

const baseUrl = API_NEWS_URL;

const newsApiHeaders = {
    'X-RapidAPI-Host': API_NEWS_HOST,
    'X-RapidAPI-Key': API_KEY,
  }

const newsApiParams = {
    sources: 'nytimes,economictimes,newsbtc,coindesk,businessinsider,cointelegraph,coindesk,utoday,coinrivet',
    query: 'crypto',
    limit: '100'
  }

  const createRequest = (url) => ({
    url, params:newsApiParams, headers: newsApiHeaders,
  });

  export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: () => createRequest('/feed')
      })
    })
  });

  export const {useGetNewsQuery,} = newsApi;