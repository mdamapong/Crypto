import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'd1945155bamsh0e179208f6a715dp1d4590jsn5bdb72beee2b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;